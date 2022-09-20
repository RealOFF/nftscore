import { Button } from '@nftscore/uikit';

export const CollectionDetailsHeader = () => {
  return (
    <div className='px-7 py-16'>
      <div className='flex items-center'>
        <div className='text-2xl font-bold text-font-primary'>Crypto punks</div>
      </div>
      <div className='text-font-secondary text-xs mt-2'>
        0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb
      </div>
      <div className='text-font-primary text-sm max-w-xl mt-3'>
        CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and
        became one of the inspirations for the ERC-721 standard. They have been
        featured in places like The New York Times, Christie’s of London,
        Art|Basel Miami, and The PBS NewsHour.
      </div>
      <div className='flex gap-3 mt-5'>
        <Button>
          Deployed <span>5 years ago</span>
        </Button>
        <Button>
          <span>9,999</span>
          circulating supply
        </Button>
        <Button>Revealed</Button>
      </div>
    </div>
  );
};
