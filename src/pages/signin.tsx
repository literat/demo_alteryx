import withApollo from '../components/withApollo';
import Signin from '../components/Signin';

const SignIn = (): JSX.Element => (
  <section>
    <Signin />
  </section>
);

export default withApollo(SignIn);
