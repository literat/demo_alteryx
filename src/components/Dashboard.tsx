import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { nanoid } from 'nanoid';
import Error from './Error';
import Loading from './Loading';
import UserListItem from './UserListItem';

export const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;

const Dashboard = (): JSX.Element => {
  const { data, loading, error } = useQuery(ALL_USERS_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return data.users.map((user) => <UserListItem user={user} key={nanoid()} />);
};

export default Dashboard;
