import { Tab } from '@headlessui/react';
import { classNames } from '../utils';
import { VARIANTS, Variants } from '../constants/variants';
import tw from 'twin.macro';

type Props = {
  items: string[];
  variant?: keyof Pick<Variants, 'primary' | 'outline'>;
};

const selectedVarians = {
  [VARIANTS.primary]: 'bg-secondary text-primary shadow',
  [VARIANTS.outline]: 'text-font-primary border border-secondary',
};

export const ButtonGrop = ({ items, variant }: Props) => {
  const selectedStyle = selectedVarians[variant || VARIANTS.primary];

  return (
    <Tab.Group>
      <Tab.List className='flex w-min rounded-xl bg-black p-1 mt-6'>
        {items.map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                'rounded-lg py-2 px-3.5 text-sm font-medium leading-5 text-font-primary px-',
                'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2 w-max',
                selected ? selectedStyle : ''
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
