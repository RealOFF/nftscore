import { Button } from '@nftscore/uikit';

export const Header = () => {
  return (
    <div className='bg-primary-100 w-full h-16 backdrop-blur-2xl flex justify-between items-center px-16'>
      <div className='flex gap-24 w-full items-center'>
        <span className='text-font-primary font-semibold text-lg'>
          nftscore
        </span>
        <input
          className='max-w-lg w-full h-10 rounded-lg p-2.5 text-font-secondary bg-black'
          placeholder='Search collections by name or address'
        />
      </div>
      <div className='flex justify-end'>
        <Button className='w-max' variant='outline'>
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};
