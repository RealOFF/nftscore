import { Table } from '@nftscore/uikit';
import { useRouter } from 'next/router';

const TABLE_HEAD_ROWS = [
  {
    title: 'Collection',
  },
  {
    title: '24h Volume',
    isSortable: true,
  },
  {
    title: '24h change %',
    isSortable: true,
  },
  {
    title: 'Floor price',
    isSortable: true,
  },
  {
    title: 'Owners',
    isSortable: true,
  },
  {
    title: 'Whale Owners',
    isSortable: true,
  },
];

const Icon = () => (
  <div className='rounded-lg w-11 h-11 bg-black-100 dark:bg-white' />
);

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

type CollectionCeil = {
  index: number;
  icon: any;
  name: string;
  supply: number;
};

const CollectionCeil: React.FC<CollectionCeil> = ({
  index,
  icon: Icon,
  name,
  supply,
}) => (
  <Table.Ceil>
    <div className='mr-4 text-xs font-normal dark:text-gray-200'>{index}</div>
    <Icon />
    <div className='ml-4'>
      <div className='font-semibold'>{name}</div>
      <div className='text-xs font-normal dark:text-gray-200'>
        Supply: {supply}
      </div>
    </div>
  </Table.Ceil>
);

const template = [
  CollectionCeil,
  Table.Ceil,
  Table.ChangeCeil,
  Table.Ceil,
  Table.Ceil,
  Table.Ceil,
];

export const TrendingCollectionsTable = () => {
  const { push } = useRouter();
  return (
    <Table
      onRowClick={(index) => push(`/collections/${index}`)}
      rows={MOCK_TABLE_DATA}
      headerItems={TABLE_HEAD_ROWS}
      template={template}
    />
  );
};
