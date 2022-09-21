/* eslint-disable @typescript-eslint/no-explicit-any */
import { classNames } from '../utils';
import React, { PropsWithChildren } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

type CeilProps = PropsWithChildren<{ className?: string }>;

const Ceil = ({ children, className }: CeilProps) => (
  <td className={classNames('dark:text-white group', className)}>
    <div
      className={classNames(
        ' group-first:justify-start flex items-center py-4 justify-center'
      )}
    >
      {children}
    </div>
  </td>
);

type ChangeCeilProps = {
  amount: number;
  direction: '+' | '-';
  unit: string;
};

const ChangeCeil = ({
  amount,
  direction,
  unit = '%',
  ...other
}: ChangeCeilProps) => (
  <Ceil {...other}>
    <span className={`${direction === '+' ? 'text-green' : 'text-red'}`}>
      {direction}
      {amount} {unit}
    </span>
  </Ceil>
);

type RowProps = {
  items: any[];
  template: React.FC<PropsWithChildren<any>>[];
  onClick: () => unknown;
};

const Row = ({ items, template, onClick }: RowProps) => (
  <tr onClick={() => onClick()} className='border-b border-gray-400'>
    {items.map((item, index) => {
      const Layout = template[index];

      if (['string', 'number'].includes(typeof item))
        return <Layout key={index}>{item}</Layout>;

      return <Layout key={index} {...item} />;
    })}
  </tr>
);

type HeaderProps = {
  items: {
    title: string;
    isSortable: boolean;
  }[];
};

const Header = ({ items }: HeaderProps) => (
  <thead>
    <tr className='border-b border-gray-400'>
      {items.map(({ title, isSortable }) => (
        <th
          scope='col'
          key={title}
          className='py-4 text-sm font-normal group dark:text-gray-200'
        >
          <div className='flex items-center justify-center group-first:justify-start'>
            {title}
            {isSortable ? (
              <ChevronUpDownIcon
                className='w-3 ml-2 dark:text-gray-500'
                aria-hidden='true'
              />
            ) : null}
          </div>
        </th>
      ))}
    </tr>
  </thead>
);

type TableProps = {
  rows: (CeilProps | ChangeCeilProps | unknown)[][];
  template: (
    | typeof Ceil
    | typeof ChangeCeil
    | React.FC<PropsWithChildren<any>>
  )[];
  headerItems: any[];
  onRowClick: (index: number) => unknown;
};

export const Table = ({
  template,
  rows,
  headerItems,
  onRowClick,
}: TableProps) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full'>
        <Header items={headerItems} />
        <tbody>
          {rows.map((items, index) => (
            <Row
              key={index}
              onClick={() => onRowClick(index)}
              template={template}
              items={items}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.Header = Header;
Table.Row = Row;
Table.Ceil = Ceil;
Table.ChangeCeil = ChangeCeil;
