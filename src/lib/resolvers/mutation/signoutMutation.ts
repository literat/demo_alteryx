export const signoutMutation = (parent, args, context) => {
  context.res.clearCookie('token');

  return { message: 'Goodbye!' };
};
