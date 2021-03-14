import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import UserForm from './UserForm';
import useForm from '../lib/useForm';
import { ALL_USERS_QUERY } from './UserListing';

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

const NewUser = (): JSX.Element => {
  const { inputs, handleChange, resetForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [signup, { loading, data }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_USERS_QUERY }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup();
    resetForm();
  };

  return (
    <UserForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      buttonLabel="Create user!"
      inputs={inputs}
      data={data}
      loading={loading}
    />
  );
};

export default NewUser;
export { SIGNUP_MUTATION };
