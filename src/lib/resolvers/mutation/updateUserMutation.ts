import bcrypt from 'bcryptjs';
import { updateUser } from '../../fauna/queries/users';

export const updateUserMutation = async (parent, args, context) => {
  // @TODO: check user ID
  // lowercase their email
  args.email = args.email.toLowerCase();
  // has their password
  const password = await bcrypt.hash(args.password, 10);
  // create the user in the database
  const { id, firstName, lastName, email } = args;

  // @TODO: check valid email
  const user = await context.db.query(
    updateUser(id, firstName, lastName, email, password)
  );

  // Finallllly we return the user to the browser
  return user;
};
