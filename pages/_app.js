import '../styles/globals.css'
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return <>
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  </>
}

export default MyApp
