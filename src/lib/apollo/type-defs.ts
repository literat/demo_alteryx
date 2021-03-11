import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    name: String
  }
`;
