import { AppBar, Toolbar } from '@material-ui/core';
import Signout from './Signout';
import { useUser } from './User';

const Nav = (): JSX.Element => {
  const me = useUser();

  return (
    <AppBar position="static">
      <Toolbar>{me && <Signout />}</Toolbar>
    </AppBar>
  );
};

export default Nav;
