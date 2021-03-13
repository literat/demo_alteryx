import Signout from './Signout';
import { useUser } from './User';

const Nav = (): JSX.Element => {
  const me = useUser();

  return <div>{me && <Signout />}</div>;
};

export default Nav;
