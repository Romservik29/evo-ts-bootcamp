import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Photo } from '../types';
import MarsPhoto from './MarsPhoto';

export default function FavoritePhotos(): JSX.Element {
  const selectFavorites = useSelector((state: RootState) => state.mars.favorites);
  const selectPhotos = useSelector((state: RootState) => state.mars.photos);

  const filtredFavorites = useMemo(() => {
    const photos: Photo[] = [];
    selectFavorites.forEach((id) => {
      const photo = selectPhotos.find((p) => p.id === id);
      return photo && photos.push(photo);
    });
    return photos;
  }, [selectFavorites, selectPhotos]);
  return filtredFavorites[0] ? (
    <>
      {filtredFavorites.map((p) => <MarsPhoto photo={p} />)}
    </>
  ) : <span>You have not favorites photo</span>;
}
