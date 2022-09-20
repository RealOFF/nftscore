import { classNames } from '@nftscore/uikit';
import { PropsWithChildren } from 'react';

const TABLE_HEAD_ROWS = [
  'Collection',
  '24h Volume',
  '24h change %',
  'Floor price',
  'Owners',
  'Whale Owners',
];

const Icon = () => <div className='rounded-lg w-11 h-11 bg-white' />;

const MOCK_TABLE_DATA_ITEM = [
  {
    name: 'Crypto Punks',
    supply: 9.9999,
    icon: Icon,
  },
  461.12,
  {
    direction: '-',
    amount: 65.86,
  },
  73.0,
  3.6,
  300,
];

const MOCK_TABLE_DATA = new Array(10)
  .fill(MOCK_TABLE_DATA_ITEM)
  .map((item, index) => [{ ...item[0], index }, ...item.slice(1, item.length)]);

const Ceil = ({
  children,
  className,
}: PropsWithChildren<{ className: string }>) => (
  <td className={classNames('text-font-primary flex items-center', className)}>
    {children}
  </td>
);

type ChangeCeilProps = {
  amount: number;
  direction: '+' | '-';
  unit: string;
};

const ChangeCeil = ({ amount, direction, unit = '%' }: ChangeCeilProps) => (
  <Ceil>
    <span className={`${direction === '+' ? 'text-green' : 'text-red'}`}>
      {direction}
      {amount} {unit}
    </span>
  </Ceil>
);

type CollectionCeil = {
  index: number;
  icon: any;
  name: string;
  supply: number;
};

const CollectionCeil = ({
  index,
  icon: Icon,
  name,
  supply,
}: CollectionCeil) => (
  <Ceil className=''>
    <div className='font-normal text-xs text-font-secondary mr-4'>{index}</div>
    <Icon />
    <div className='ml-4'>
      <div className='font-semibold'>{name}</div>
      <div className='font-normal text-xs text-font-secondary'>
        Supply: {supply}
      </div>
    </div>
  </Ceil>
);

type RowProps = {
  items: any[];
  template: React.FC[];
};

const Row = ({ items, template }: RowProps) => (
  <tr className='h-20 flex items-center justify-between border-b border-font-secondary'>
    {items.map((item, index) => {
      const Layout = template[index];

      if (['string', 'number'].includes(typeof item))
        return <Layout key={index}>{item}</Layout>;

      return <Layout key={index} {...item} />;
    })}
  </tr>
);

const Header = () => (
  <tr className='w-full flex justify-between border-b border-font-secondary'>
    {TABLE_HEAD_ROWS.map((item) => (
      <th key={item} className='text-font-secondary text-sm font-normal py-4'>
        {item}
      </th>
    ))}
  </tr>
);

const template = [CollectionCeil, Ceil, ChangeCeil, Ceil, Ceil, Ceil];

export const TrendingCollectionsTable = () => {
  return (
    <div>
      <Header />
      {MOCK_TABLE_DATA.map((item, index) => (
        <Row key={index} template={template} items={item} />
      ))}
    </div>
  );
};
