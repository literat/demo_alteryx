import { createUser } from './../../fauna/queries/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signupMutation = async (parent, args, context, info) => {
  // lowercase their email
  args.email = args.email.toLowerCase();
  // has their password
  const password = await bcrypt.hash(args.password, 10);
  // create the user in the database
  const {firstName, lastName, email} = args;

  // @TODO: check valid email
  const user = await context.db.query(
    createUser(firstName, lastName, email, password)
  );

  // create JWT token for them
  const token = jwt.sign({ userId: user.ref.id }, process.env.APP_SECRET);
  // Better approach is to store it in memory
  // https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/
  // We set jwt as a cookie on the response
  context.res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });

  // Finallllly we return the user to the browser
  return user.data;
};
