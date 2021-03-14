import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      firstName
      lastName
    }
  }
`;

const Signin = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <form
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        await signin();

        resetForm();
      }}
    >
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Sign into your account</h2>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
            // @ts-ignore
            value={inputs.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            // @ts-ignore
            value={inputs.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </label>

        <button type="submit">Sign In!</button>
      </fieldset>
    </form>
  );
};

export default Signin;
