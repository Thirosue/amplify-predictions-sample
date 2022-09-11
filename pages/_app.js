import '../styles/globals.css'
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import {
  AmazonAIPredictionsProvider
} from '@aws-amplify/predictions';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
try {
  Amplify.addPluggable(new AmazonAIPredictionsProvider());
} catch (e) { }

function MyApp({ Component, pageProps }) {
  return <>
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  </>
}

export default MyApp
