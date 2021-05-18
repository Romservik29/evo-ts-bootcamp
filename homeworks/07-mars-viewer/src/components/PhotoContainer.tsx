import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import MarsPhoto from './MarsPhoto';

export default function PhotoContainer():JSX.Element {
  const photos = useSelector((state:RootState) => state.mars.photos);
  const favorites = useSelector((state:RootState) => state.mars.favorites);
  const selectRoute = useSelector((state:RootState) => state.controls.route);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 10,
      margin: 10,
    }}
    >
      {selectRoute === 'gallery'
        ? photos.map((p) => <MarsPhoto photo={p} />)
        : favorites.map((p) => <MarsPhoto photo={p} />)}
    </div>
  );
}
