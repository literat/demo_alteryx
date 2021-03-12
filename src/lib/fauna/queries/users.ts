import { query as fql } from 'faunadb';

const { Map, Paginate, Match, Index, Lambda, Get, Var, Create, Collection} = fql;

export const allUsers = () => Map(
  Paginate(
    Match(Index("all_users"))
  ),
  Lambda("X", Get(Var("X")))
)

export const findUserByEmail = (email) => Get(
    Match(Index("user_by_email"), email)
  )

export const createUser = (firstName: string, lastName: string, email: string, password: string) => Create(
  Collection("users"),
  {
    data: {
      firstName,
      lastName,
      email,
      password,
    }
  }
)
