import { useEffect, useState } from 'react'
import { Amplify, DataStore } from 'aws-amplify';
import Predictions, {
  AmazonAIPredictionsProvider
} from '@aws-amplify/predictions';

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
  Amplify.addPluggable(new AmazonAIPredictionsProvider());
} catch (e) { }

function App() {
  const [picture, setPicture] = useState(null);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const id = window.location.href.split('/detail/')[1];
    if (id) {
      DataStore.query(Picture, id).then(setPicture);
    }
  }, [window.location.href]);

  useEffect(() => {
    if (picture) {
      fetch(picture.Url).then(data => data.blob()).then(blob => {
        Predictions.identify({
          labels: {
            source: {
              file: blob
            },
            type: "LABELS"
          }
        })
          .then(response => {
            const { labels } = response;
            labels.forEach(object => {
              const { name, boundingBoxes } = object
            });
            console.log(labels)
            setLabels(labels);
          })
      })
    }
  }, [picture]);

  return (
    <>
      {picture ? (<>
        <Grid
          templateColumns="1fr 1fr"
          padding="3rem"
        >
          <TallCard picture={picture} />
          <ul>
            {labels.map(label => (
              <li key={label.name}>{label.name} : {label.metadata.confidence}%</li>
            ))}
          </ul>
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