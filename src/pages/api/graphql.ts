import { ApolloServer } from 'apollo-server-micro';
import { resolvers } from '../../lib/resolvers';
import { typeDefs } from '../../lib/apollo/type-defs';
import { db } from '../../lib/db';

const context = () => ({ db });

const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
const handler = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
