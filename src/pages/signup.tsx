import withApollo from '../components/withApollo';
import Signup from '../components/Signup';

const SignUp = (): JSX.Element => (
  <section>
    <Signup />
  </section>
);

export default withApollo(SignUp);
