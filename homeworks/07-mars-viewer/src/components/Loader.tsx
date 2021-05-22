import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export function Loader(): JSX.Element | null {
  const loading = useSelector((state: RootState) => state.controls.isFetching);
  return loading ? (
    <span>
      Loading...
    </span>
  )
    : null;
}
