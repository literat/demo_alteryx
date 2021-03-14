import { ReactNode } from 'react';
import { useUser } from './User';
import Signin from './Signin';

interface PleaseSignInProps {
  children: ReactNode;
}

const PleaseSignIn = ({ children }: PleaseSignInProps): ReactNode => {
  const me = useUser();

  if (!me) return <Signin />;

  return children;
};

export default PleaseSignIn;
