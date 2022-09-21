import { Button, Input, themeSwitcher } from '@nftscore/uikit';
import { useRouter } from 'next/router';

export const Header = () => {
  const { push } = useRouter();

  return (
    <div className='flex items-center justify-between w-full h-16 px-16 bg-gray-100 dark:bg-black-200 backdrop-blur-2xl'>
      <div className='flex items-center w-full gap-24'>
        <span
          onClick={() => push('/collections')}
          className='text-lg font-semibold cursor-pointer dark:text-white'
        >
          nftscore
        </span>
        <Input
          className='w-full h-10 max-w-lg'
          placeholder='Search collections by name or address'
        />
      </div>
      <div className='flex justify-end'>
        <Button
          onClick={() => themeSwitcher.toggle()}
          className='w-max'
          variant='outline'
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};
