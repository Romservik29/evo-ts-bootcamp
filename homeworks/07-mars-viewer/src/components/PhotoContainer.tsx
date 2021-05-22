import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import FavoritePhotos from './FavoritePhotos';
import GalleryPhotos from './GalleryPhotos';

export default function PhotoContainer(): JSX.Element {
  const selectRoute = useSelector((state: RootState) => state.controls.route);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 10,
      margin: 10,
    }}
    >
      {
        selectRoute === 'gallery'
          ? <GalleryPhotos />
          : <FavoritePhotos />
      }

    </div>
  );
}
