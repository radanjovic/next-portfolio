import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';


function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Radan Jovic</title>
      <meta name='author' content='Radan Jovic' />
      <meta name='description' content='Portfolio website of Radan Jovic, web developer, showcasing all his skills, certificates and projects.' />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>)
}

export default MyApp
