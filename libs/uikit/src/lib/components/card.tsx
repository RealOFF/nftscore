import React from 'react';
import { classNames } from '../utils';

export const Card = ({
  children,
  className,
}: React.PropsWithChildren<{ className: string }>) => {
  return (
    <div className={classNames('dark:bg-black-300', className)}>{children}</div>
  );
};
