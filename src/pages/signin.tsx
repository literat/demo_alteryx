import withApollo from '../components/withApollo';
import SignInForm from '../components/SignInForm';

const SignIn = (): JSX.Element => (
  <section>
    <SignInForm />
  </section>
);

export default withApollo(SignIn);
