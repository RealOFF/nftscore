import { PropsWithChildren } from 'react';
import { Header } from './header';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='min-h-screen dark:bg-black-100'>
      <Header />
      <main>{children}</main>
    </div>
  );
};
