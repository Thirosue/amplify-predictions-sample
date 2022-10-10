import { useEffect, useState } from 'react'
import { Amplify, DataStore } from 'aws-amplify';
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

try {
  Amplify.configure(awsExports);
  // Amplify.addPluggable(new AmazonAIPredictionsProvider());
} catch (e) { }

function App() {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const id = window.location.href.split('/detail/')[1];
    if (id) {
      DataStore.query(Picture, id).then(setPicture);
    }
  }, [window.location.href]);

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