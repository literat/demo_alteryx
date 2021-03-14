// @ts-nocheck
import { findUserById } from '../../fauna/queries/users';

export const userQuery = async (parent, args, context) => {
  // check if there is a user ID
  if (!args.id) {
    return null;
  }

  let user;
  try {
    user = await context.db.query(findUserById(args.id));
  } catch (e) {
    return null;
  }

  return user;
};
