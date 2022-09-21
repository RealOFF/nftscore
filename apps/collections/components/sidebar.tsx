import { PropsWithChildren } from 'react';

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className='border-r h-full py-16 px-7 border-gray-200 max-w-[230px] w-full'>
      {children}
    </div>
  );
};
