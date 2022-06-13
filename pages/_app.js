import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel='icon' href="/favicon.gif"/>
    </Head>
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    </>
  
  )
}

export default MyApp
