# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Sample Data

| Name | Description | Url |
|:-----------|:------------|:------------|
| コーヒー      | コクのある苦味がうりです   |https://raw.githubusercontent.com/Thirosue/hosting-image/main/img/drink/coffee.jpeg         |
| 紅茶   | 風味豊かな紅茶です   |https://raw.githubusercontent.com/Thirosue/hosting-image/main/img/drink/tea.jpeg         |
| カメ      | カメ   |https://raw.githubusercontent.com/Thirosue/hosting-image/main/img/animal/testudines.jpeg         |
| 橋   | 大鳴門橋です   |https://raw.githubusercontent.com/Thirosue/hosting-image/main/img/others/bridge.jpeg         |

### App.js

```javascript
import { useEffect, useState } from 'react'
import { Amplify, DataStore } from 'aws-amplify';

// 追加
// import Predictions, {
//   AmazonAIPredictionsProvider
// } from '@aws-amplify/predictions';

import { Grid, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import {
  NavBar,
  CreatePicture,
  TallCard,
  TallCardCollection
} from './ui-components';
import { Picture } from './models';

// 修正
try {
  Amplify.configure(awsExports);
  // Amplify.addPluggable(new AmazonAIPredictionsProvider());
} catch (e) { }

function App() {
  // 追加
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const id = window.location.href.split('/detail/')[1];
    if (id) {
      DataStore.query(Picture, id).then(setPicture);
    }
  }, [window.location.href]);

  // 修正
  return (
    <>
      {picture ? (<>
        <Grid
          templateColumns="1fr 1fr"
          padding="3rem"
        >
          <TallCard picture={picture} />
        </Grid>
      </>) : (<>
        <NavBar />
        <Grid
          templateColumns="1fr 1fr"
          padding="3rem"
        >
          <TallCardCollection />
          <CreatePicture />
        </Grid>
      </>)
      }
    </>
  );
}

export default withAuthenticator(App);
```