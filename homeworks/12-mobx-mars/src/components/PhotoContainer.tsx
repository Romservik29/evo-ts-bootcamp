import { observer } from 'mobx-react-lite';
import { useStore } from '../app/store';
import FavoritePhotos from './FavoritePhotos';
import GalleryPhotos from './GalleryPhotos';

export default observer(() => {
  const Controls = useStore("Controls")
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(400px,auto))',
      gridGap: 10,
      margin: 10,
    }}
    >
      {
        Controls.route === 'gallery'
          ? <GalleryPhotos />
          : <FavoritePhotos />
      }
    </div>
  );
})
