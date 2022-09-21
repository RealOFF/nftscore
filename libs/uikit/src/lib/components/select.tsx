import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

type SwitchProps = {
  value: {
    title: string;
  };
  onChange?(value: { title: string }): void;
  className?: string;
  items: { title: string }[];
};

export const Select = ({ items, ...props }: SwitchProps) => (
  <Listbox {...props}>
    <div className='relative mt-1'>
      <Listbox.Button className='relative w-full h-10 py-2 pl-3 pr-10 text-left border border-gray-400 rounded-lg cursor-default dark:border-gray-200 dark:text-white dark:bg-black-100 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
        <span className='block truncate'>{props.value.title}</span>
        <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
          <ChevronUpDownIcon
            className='w-5 h-5 dark:text-gray-500'
            aria-hidden='true'
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base border border-gray-200 rounded-md max-h-60 dark:bg-black-100 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
          {items.map((item, personIdx) => (
            <Listbox.Option
              key={personIdx}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
              value={item}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate dark:text-white ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item.title}
                  </span>
                  {selected ? (
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                      <CheckIcon className='w-5 h-5' aria-hidden='true' />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);
