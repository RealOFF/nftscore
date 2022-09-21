import { TrendingCollectionsHeader } from './trending-collections-header';
import { TrendingCollectionsTable } from './trending-collections-table';

export const TrendingCollections = () => {
  return (
    <div className='h-full pt-16 pb-6 mx-28'>
      <TrendingCollectionsHeader className='pb-5' />
      <TrendingCollectionsTable />
    </div>
  );
};
