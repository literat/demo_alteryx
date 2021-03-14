import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Button } from '@material-ui/core';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = (): JSX.Element => {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <Button type="button" color="inherit" onClick={() => signout()}>
      Sign Out
    </Button>
  );
};

export default Signout;
