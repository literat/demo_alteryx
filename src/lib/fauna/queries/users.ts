import { query as fql } from 'faunadb';

const { Map, Paginate, Match, Index, Lambda, Get, Var, Let, Select, Create, Collection} = fql;

export const allUsers = () => Map(
  Paginate(
    Match(Index("all_users"))
  ),
  Lambda("userRef", Let(
      {
        userDoc: Get(Var("userRef"))
      },
      {
        id: Select(["ref", "id"], Var("userDoc")),
        firstName: Select(["data", "firstName"], Var("userDoc")),
        lastName: Select(["data", "lastName"], Var("userDoc")),
        email: Select(["data", "email"], Var("userDoc")),
      }
    )
  )
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
