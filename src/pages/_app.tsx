import Head from 'next/head';

import { AuthProvider } from 'src/contexts/auth.context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJS Blue Assessment</title>
        <meta name="description" content="NextJS Blue Assessment" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
