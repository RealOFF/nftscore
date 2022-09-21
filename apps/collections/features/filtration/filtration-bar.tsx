import { Switch, Input, Select } from '@nftscore/uikit';

const BOOLEAN_FILTERS = ['Buy now', 'Rarity ranking'];

export const FiltrationBar = () => {
  return (
    <div className='flex gap-7 flex-col w-full'>
      <div className='dark:text-white font-bold text-2xl w-full mb-3'>
        Filter
      </div>
      <div className='flex gap-5 flex-col'>
        {BOOLEAN_FILTERS.map((item) => (
          <div
            className='dark:text-white w-full flex justify-between items-center'
            key={item}
          >
            {item} <Switch />
          </div>
        ))}
      </div>
      <div>
        <div className='text-sm dark:text-gray-200'>Price:</div>
        <div className='flex justify-between mt-2'>
          <Input variant='outline' className='w-20' placeholder='Min' />
          <Input variant='outline' className='w-20' placeholder='Min' />
        </div>
      </div>
      <Select
        value={{ title: 'Marketplace' }}
        items={[{ title: 'Marketplace' }]}
      />
      <div>
        <div className='text-sm dark:text-gray-200'>Price:</div>
        <div className='flex flex-col gap-2 justify-between mt-2'>
          <Select value={{ title: 'Types' }} items={[{ title: 'Types' }]} />
          <Select
            value={{ title: 'Accessories' }}
            items={[{ title: 'Accessories' }]}
          />
        </div>
      </div>
    </div>
  );
};
