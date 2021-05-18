import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Photo } from '../types';
import MarsPhoto from './MarsPhoto';

export default function PhotoContainer(): JSX.Element {
  const selectPhotos = useSelector((state: RootState) => {
    const photos: Photo[] = [];
    state.mars.sols[state.mars.sols.length - 1].photosId.forEach((id) => {
      const photo = state.mars.photos.find((p) => p.id === id);
      return photo && photos.push(photo);
    });
    return photos;
  });
  const selectFavorites = useSelector((state: RootState) => {
    const favorites: Photo[] = [];
    state.mars.favorites.forEach((id) => {
      const photo = state.mars.photos.find((p) => p.id === id);
      return photo && favorites.push(photo);
    });
    return favorites;
  });
  const selectRoute = useSelector((state: RootState) => state.controls.route);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 10,
      margin: 10,
    }}
    >
      {selectRoute === 'gallery'
        ? selectPhotos.map((p) => <MarsPhoto photo={p} />)
        : selectFavorites.map((p) => <MarsPhoto photo={p} />)}
    </div>
  );
}
