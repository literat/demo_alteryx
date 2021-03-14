import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../../fauna/queries/users';

export const signinMutation = async (parent, { email, password }, context) => {
  // 1. Check if there is a user with that email
  const user = await context.db.query(findUserByEmail(email));

  if (!user) {
    throw new Error(`No such user found for email ${email}`);
  }
  // 2. Check if their password is correct
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid Password!');
  }
  // 3. Generate the JWT Token
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  // 4. Set the cookie with the token
  context.res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });

  // 5. Return the user
  return user;
};
