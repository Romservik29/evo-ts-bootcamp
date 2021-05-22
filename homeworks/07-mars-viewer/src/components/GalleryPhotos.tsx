import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Photo } from '../types';
import MarsPhoto from './MarsPhoto';

export default function GalleryPhotos(): JSX.Element {
  const selectPhotos = useSelector((state: RootState) => state.mars.photos);
  const selectSol = useSelector(
    (state: RootState) => state
      .mars.sols[state.mars.sols.length - 1]?.photosId,
  );
  const filtredPhoto = useMemo(() => {
    const photos: Photo[] = [];
    selectSol?.forEach((id) => {
      const photo = selectPhotos.find((p) => p.id === id);
      return photo && photos.push(photo);
    });
    return photos;
  }, [selectSol, selectPhotos]);

  return (
    <>
      {filtredPhoto.map((p) => <MarsPhoto photo={p} />)}
    </>

  );
}
