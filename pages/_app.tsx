import '../styles/globals.css';
import '../styles/fonts.css';
import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>PoE Pocket Guide</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
