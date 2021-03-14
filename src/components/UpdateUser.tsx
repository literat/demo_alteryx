import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
// @ts-nocheck
import UserForm from './UserForm';

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;

interface UpdateUserProps {
  id: string;
}

const UpdateUser = ({ id }: UpdateUserProps): JSX.Element => {
  console.log(id);
  const { data = {}, loading } = useQuery(SINGLE_USER_QUERY, {
    variables: {
      id,
    },
  });

  const [updateUser, { loading: updating }] = useMutation(UPDATE_USER_MUTATION);

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();
    await updateUser({
      variables: {
        id,
        ...inputs,
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (!data || !data.user) return <p>No User Found for ID {id}</p>;

  console.log(data);

  return (
    <UserForm
      onSubmit={handleSubmit}
      buttonLabel="Update user"
      loading={updating}
      initialUser={data.user}
    />
  );
};

export default UpdateUser;
