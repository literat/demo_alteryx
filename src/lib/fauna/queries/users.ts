import { query as fql } from 'faunadb';

const {
  Map,
  Paginate,
  Match,
  Index,
  Lambda,
  Get,
  Var,
  Let,
  Select,
  Create,
  Collection,
  Delete,
  Ref,
} = fql;

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const normalizeUser = (docRef: string): User => ({
  id: Select(['ref', 'id'], Var(docRef)),
  firstName: Select(['data', 'firstName'], Var(docRef)),
  lastName: Select(['data', 'lastName'], Var(docRef)),
  email: Select(['data', 'email'], Var(docRef)),
  password: Select(['data', 'password'], Var(docRef)),
});

export const allUsers = (): Array<User> =>
  Map(
    Paginate(Match(Index('all_users'))),
    Lambda(
      'userRef',
      Let(
        {
          userDoc: Get(Var('userRef')),
        },
        normalizeUser('userDoc')
      )
    )
  );

export const findUserById = (id: string): User =>
  Let(
    {
      data: Get(Ref(Collection('users'), id)),
    },
    normalizeUser('data')
  );

export const findUserByEmail = (email: string): User =>
  Let(
    {
      data: Get(Match(Index('user_by_email'), email)),
    },
    normalizeUser('data')
  );

export const createUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): User =>
  Let(
    {
      data: Create(Collection('users'), {
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      }),
    },
    normalizeUser('data')
  );

export const removeUser = (id: string): User =>
  Let(
    {
      data: Delete(Ref(Collection('users'), id)),
    },
    normalizeUser('data')
  );
