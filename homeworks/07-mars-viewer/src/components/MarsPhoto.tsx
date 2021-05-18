/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { addToFavorites, removeFromFavorites } from '../features/marsGallery/marsGallerySlice';
import { Photo } from '../types';
import Heart from './Heart';

type MarsPhotoPros = {
  photo: Photo
};

export default function MarsPhoto({ photo }: MarsPhotoPros): JSX.Element {
  const dispatch = useDispatch();
  const like = useSelector(
    ((state: RootState) => state.mars.favorites.some((id) => id === photo.id)),
  );
  const likeToggle = () => {
    like || dispatch(addToFavorites(photo.id));
    like && dispatch(removeFromFavorites(photo.id));
  };
  return (
    <div style={{ position: 'relative' }}>
      <div className="center">
        <span role="button" tabIndex={0} onKeyPress={likeToggle} onClick={likeToggle}>
          <Heart
            color={like ? 'red' : 'grey'}
            opacity={like ? 1 : 0.25}
          />
        </span>
      </div>
      <img src={photo.img_src} alt={photo.rover.name} width="100%" height="100%" />
    </div>
  );
}
