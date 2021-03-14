import { allUsers } from '../../fauna/queries/users';

export const usersQuery = async (parent, args, context, info) => {
  try {
    const users = await context.db.query(allUsers());

    return users.data;
  } catch (error) {
    throw new Error('Users not found', error);
  }
};
