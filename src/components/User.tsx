import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      firstName
      lastName
    }
  }
`;

const useUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  if (data) {
    return data.me;
  }
};

export { CURRENT_USER_QUERY, useUser };
