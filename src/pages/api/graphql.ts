import { ApolloServer } from 'apollo-server-micro';
import nextConnect from 'next-connect';
import { typeDefs } from '../../lib/apollo/type-defs';
import { db } from '../../lib/db';
import useCookie from '../../lib/middleware/useCookie';
import useUserId from '../../lib/middleware/useUserId';
import { resolvers } from '../../lib/resolvers';

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
handler.use(useUserId());
handler.use(useApollo);

export default handler;
