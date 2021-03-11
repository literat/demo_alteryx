import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  scalar Time

  type User {
    firstName: String!
    lastName: String
    email: String!
    password: String!
    resetToken: String
    resetTokenExpiry: Float
    createdAt: Time!
    updatedAt: Time!
  }
`;
