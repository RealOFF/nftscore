import { TrendingCollectionsHeader } from './trending-collections-header';
import { TrendingCollectionsTable } from './trending-collections-table';

export const TrendingCollections = () => {
  return (
    <div className='h-full mx-28 pt-16'>
      <TrendingCollectionsHeader className='pb-5' />
      <TrendingCollectionsTable />
    </div>
  );
};
