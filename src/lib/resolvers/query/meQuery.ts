import { findUserById } from '../../fauna/queries/users';

export const meQuery = (parent, args, context) => {
  // check if there is a current user ID
  if (!context.req.userId) {
    return null;
  }

  return context.db.query(findUserById(context.req.userId));
};
