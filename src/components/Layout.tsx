import { ReactNode } from 'react';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <>
    <Meta siteTitle="rimmer" />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
