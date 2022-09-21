import { Tab } from '@headlessui/react';
import { classNames } from '../utils';
import { VARIANTS, Variants } from '../constants/variants';

type Props = {
  items: string[];
  variant?: keyof Pick<Variants, 'primary' | 'outline'>;
};

const sharedSelected = '';

const selectedVarians = {
  [VARIANTS.primary]: classNames(
    sharedSelected,
    'dark:bg-lightblue-100 bg-black-900 dark:text-black-100 text-white shadow'
  ),
  [VARIANTS.outline]: classNames(
    sharedSelected,
    'dark:text-white text-black-100 border border-secondary'
  ),
};

export const ButtonGrop = ({ items, variant }: Props) => {
  const selectedStyle = selectedVarians[variant || VARIANTS.primary];

  return (
    <Tab.Group>
      <Tab.List className='flex p-1 mt-6 bg-gray-100 dark:bg-black-900 w-min rounded-xl dark:bg-black'>
        {items.map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                selected ? selectedStyle : 'text-gray-500',
                'rounded-lg py-2 px-3.5 text-sm font-medium leading-5',
                'ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2 w-max'
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};
