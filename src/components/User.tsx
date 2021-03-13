import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

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

const useUser = (): User => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  if (data) {
    return data.me;
  }
};

export { CURRENT_USER_QUERY, useUser };
