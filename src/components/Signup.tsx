import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;

function Signup() {
  const { inputs, handleChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [signup, { loading, data }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  return (
    <form
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        await signup();
      }}
    >
      <fieldset disabled={loading} aria-busy={loading} data-testid="loading">
        {data && data.user && (
          <p>Signed up with {data.user.email} — Please Sign In now</p>
        )}
        <h2>Sign Up for An Account</h2>
        <label htmlFor="firstName">
          First name
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={inputs.firstName}
            onChange={handleChange}
            autoComplete="firstName"
          />
        </label>
        <label htmlFor="lastName">
          Last name
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={inputs.lastName}
            onChange={handleChange}
            autoComplete="lastName"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
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
            value={inputs.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </label>

        <button type="submit">Sign Up!</button>
      </fieldset>
    </form>
  );
}

export default Signup;
export { SIGNUP_MUTATION };
