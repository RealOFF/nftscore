import { Sidebar } from '../../components/sidebar';
import { FiltrationBar } from '../../features/filtration';
import { CollectionDetails } from '../../features/collection-deteils';

const Collection = () => {
  return (
    <div className='flex h-full'>
      <Sidebar>
        <FiltrationBar />
      </Sidebar>
      <CollectionDetails />
    </div>
  );
};

export default Collection;
