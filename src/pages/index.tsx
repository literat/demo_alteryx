import withApollo from '../components/withApollo';
import Dashboard from '../components/Dashboard';

const Home = (): JSX.Element => (
  <section>
    <Dashboard />
  </section>
);

export default withApollo(Home);
