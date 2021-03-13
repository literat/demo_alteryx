import { ReactNode } from 'react';
import Header from './Header';
import Meta from './Meta';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <>
    <Meta siteTitle="rimmer" />
    <Header />
    {children}
  </>
);

export default Layout;
