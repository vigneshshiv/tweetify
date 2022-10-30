/**
 * Layout
 */

import { ReactNode } from 'react';
// Application
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <main className='relative h-screen z-10 flex flex-col overflow-hidden'>
      {children}
    </main>
  );
};

export default Layout;
