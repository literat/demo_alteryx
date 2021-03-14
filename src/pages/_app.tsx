import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import withApollo from '../components/withApollo';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default withApollo(App);
