/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { getPhotos } from '../features/marsGallery/marsGallerySlice';
import SelectAlbum from './SelectAlbum';
import NumberInput from './NumberInput';
import SelectRover from './SelectRover';

export default function Controls(): JSX.Element {
  const dispatch = useDispatch();
  const sol = useSelector((state: RootState) => state.controls.sols);
  const selectCurrentRover = useSelector((state: RootState) => state.controls.rover);

  const fetchPhoto = () => {
    dispatch(getPhotos(sol, selectCurrentRover));
  };
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
    }}
    >

      <SelectAlbum />
      <div>
        <h3>
          Select Sol and press button &apos;load&apos;
        </h3>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <SelectRover />
        <label>
          Sol
          <NumberInput />
        </label>
        <button type="button" onClick={fetchPhoto}>Load</button>
      </div>
    </div>
  );
}
