import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User
    me: User
  }

  type SuccesMessage {
    message: String
  }

  type Mutation {
    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): User!
    signin(email: String!, password: String!): User!
    signout: SuccesMessage!
    removeUser(id: ID!): User!
    updateUser(
      id: ID!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): User!
  }

  scalar Time

  type User {
    id: ID!
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
