import { Switch as SwitchBase } from '@headlessui/react';

type SwitchProps = {
  checked?: boolean;
  onChange?(checked: boolean): void;
  className?: string;
};

export const Switch = (props: SwitchProps) => (
  <SwitchBase
    className={`${props.checked ? 'bg-secondary' : 'bg-secondary'}
  relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    {...props}
  >
    <span className='sr-only'>Use setting</span>
    <span
      aria-hidden='true'
      className={`${props.checked ? 'translate-x-9' : 'translate-x-0'}
    pointer-events-none inline-block h-4 w-4 transform rounded-full bg-primary shadow-lg ring-0 transition duration-200 ease-in-out`}
    />
  </SwitchBase>
);
