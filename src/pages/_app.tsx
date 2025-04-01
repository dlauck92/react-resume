/* eslint-disable react-memo/require-memo */
import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Ld7vAUrAAAAAHM87_hk0QFD2ur_UpuF0bUbekBG">
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
