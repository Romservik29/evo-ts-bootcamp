import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setSol } from '../features/control/controlSlice';

type InputProps = {
  min?: number
  max?: number
};

const InputDefaultProps = {
  min: 1,
  max: 1000,
};

function NumberInput({ min, max }:InputProps):JSX.Element {
  const dispatch = useDispatch();
  const value = useSelector((state:RootState) => state.controls.sols);
  const handleChanege = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSol(+e.currentTarget.value));
  };
  return <input type="number" onChange={handleChanege} value={value} min={min} max={max} />;
}

NumberInput.defaultProps = InputDefaultProps;

export default NumberInput;
