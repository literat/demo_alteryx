import { ApolloServer } from 'apollo-server-micro';
import { resolvers } from '../../lib/resolvers';
import { typeDefs } from '../../lib/apollo/type-defs';
import { db } from '../../lib/db';
import useCookie from '../../lib/middleware/useCookie';
import nextConnect from 'next-connect';

const context = (request) => ({ ...request, db });

const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
const useApollo = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect();

handler.use(useCookie());
handler.use(useApollo);

export default handler;
