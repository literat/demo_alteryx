import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { ALL_USERS_QUERY } from './Dashboard';

const REMOVE_USER_MUTATION = gql`
  mutation REMOVE_USER_MUTATION($id: ID!) {
    removeUser(id: $id) {
      id
      firstName
      lastName
      email
    }
  }
`;

const UserListItem = ({ user }) => {
  const [removeUser] = useMutation(REMOVE_USER_MUTATION, {
    variables: {
      id: user.id,
    },
    refetchQueries: [{ query: ALL_USERS_QUERY }],
  });

  const handleRemove = async (e) => {
    e.preventDefault();
    await removeUser();
  };

  return (
    <div>
      <span style={{ padding: '5px' }}>{user.firstName}</span>
      <span style={{ padding: '5px' }}>{user.lastName}</span>
      <span style={{ padding: '5px' }}>{user.email}</span>
      <button type="button" style={{ padding: '5px' }} onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default UserListItem;
