import { signinMutation } from './signinMutation';
import { signupMutation } from './signupMutation';
import { signoutMutation } from './signoutMutation';

export const Mutation = {
  signin: signinMutation,
  signup: signupMutation,
  signout: signoutMutation,
};
