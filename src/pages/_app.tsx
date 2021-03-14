import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import withApollo from '../components/withApollo';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default withApollo(App);
