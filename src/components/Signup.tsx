import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import UserForm from './UserForm';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';

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

const Signup = (): JSX.Element => {
  const { inputs, handleChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [signup, { loading, data }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup();
  };

  return (
    <>
      <h2>Sign Up for An Account</h2>
      {data && data.signup && (
        <p>Signed up with {data.signup.email} — Please Sign In now</p>
      )}
      <UserForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        buttonLabel="Sign Up!"
        inputs={inputs}
        data={data}
        loading={loading}
      />
    </>
  );
};

export default Signup;
export { SIGNUP_MUTATION };
