/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Rover } from '../features/marsGallery/rovers';

export default function SelectRover():JSX.Element {
  return (
    <div>
      <option value="Rover">
        {Object.keys(Rover).map((v) => <select value={v} />)}
      </option>
    </div>

  );
}
