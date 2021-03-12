import { removeUser } from '../../fauna/queries/users';

export const removeUserMutation = async (parent, { id }, context) => {
  const user = await context.db.query(removeUser(id));

  if (!user) {
    throw new Error('No such user found');
  }

  return user;
};
