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
  const { resetForm } = useForm();
  const [signup, { loading, data }] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();
    await signup({
      variables: inputs,
      refetchQueries: [{ query: ALL_USERS_QUERY }],
    });
    resetForm();
  };

  return (
    <UserForm
      onSubmit={handleSubmit}
      buttonLabel="Create user!"
      initialUser={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      loading={loading}
    />
  );
};

export default NewUser;
export { SIGNUP_MUTATION };
