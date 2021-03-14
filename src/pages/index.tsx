import Dashboard from '../components/Dashboard';
import PleaseSignIn from '../components/PleaseSignIn';

const Home = (): JSX.Element => (
  <section>
    <PleaseSignIn>
      <Dashboard />
    </PleaseSignIn>
  </section>
);

export default Home;
