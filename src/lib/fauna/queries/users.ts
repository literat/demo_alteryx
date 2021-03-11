import { query as fql } from 'faunadb';

const { Map, Paginate, Match, Index, Lambda, Get, Var} = fql;

export const allUsers = () => Map(
  Paginate(
    Match(Index("all_users"))
  ),
  Lambda("X", Get(Var("X")))
)
