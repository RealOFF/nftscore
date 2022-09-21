import { ButtonGrop } from '@nftscore/uikit';

const CATEGORIES = ['Trending', 'Portfolio', 'Sweeps', 'Watchlist'];

const TIME = ['All time', '30d', '7d', '24h', '3h', '1h'];

export const TrendingCollectionsHeader: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className='flex items-center'>
        <div className='text-2xl font-bold dark:text-white'>
          Trending Collections
        </div>
        <div className='text-green font-medium ml-3'>Updated</div>
      </div>
      <div className='dark:text-gray-200'>DIscover all popular projects</div>
      <div className='flex justify-between'>
        <ButtonGrop items={CATEGORIES} />
        <ButtonGrop variant='outline' items={TIME} />
      </div>
    </div>
  );
};
