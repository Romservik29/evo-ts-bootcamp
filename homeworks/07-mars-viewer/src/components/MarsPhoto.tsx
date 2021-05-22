import React, { useMemo } from 'react';
import { Photo } from '../types';
import Heart from './Heart';

type MarsPhotoPros = {
  photo: Photo
};

export default function MarsPhoto({ photo }: MarsPhotoPros): JSX.Element {
  return useMemo(() => (
    <div style={{ position: 'relative' }}>
      <div className="center">
        <span role="button" tabIndex={0}>
          <Heart photoId={photo.id} />
        </span>
      </div>
      <img src={photo.img_src} alt={photo.rover.name} width="100%" height="100%" />
    </div>
  ), [photo.id, photo.img_src, photo.rover.name]);
}
