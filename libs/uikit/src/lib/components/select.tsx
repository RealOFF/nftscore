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
      <Listbox.Button className='relative h-10 w-full border-font-secondary text-font-primary cursor-default border rounded-lg bg-primary py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
        <span className='block truncate'>{props.value.title}</span>
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
          <ChevronUpDownIcon
            className='h-5 w-5 text-gray-400'
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
        <Listbox.Options className='absolute border border-font-secondary mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
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
                    className={`block truncate text-font-primary ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item.title}
                  </span>
                  {selected ? (
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                      <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
