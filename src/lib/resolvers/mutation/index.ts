import { signinMutation } from './signinMutation';
import { signupMutation } from './signupMutation';
import { signoutMutation } from './signoutMutation';
import { removeUserMutation } from './removeUserMutation';
import { updateUserMutation } from './updateUserMutation';

export const Mutation = {
  signin: signinMutation,
  signup: signupMutation,
  signout: signoutMutation,
  removeUser: removeUserMutation,
  updateUser: updateUserMutation,
};
