import '../styles/globals.css';
import '../styles/fonts.css';
import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>PoE Pocket Guide</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
