/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rover } from '../marsGallery/rovers';

type AnyRover = keyof typeof Rover;

export interface ControlsReducer {
  sols: number,
  route: 'gallery' | 'favorite',
  rover: AnyRover,
  isFetching: boolean,
}

const initialState: ControlsReducer = {
  sols: 1,
  route: 'gallery',
  rover: Rover.Curiosity,
  isFetching: false,
};

const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<'favorite' | 'gallery'>) => {
      state.route = action.payload;
    },
    setSol: (state, action: PayloadAction<number>) => {
      state.sols = action.payload;
    },
    setRover: (state, action: PayloadAction<keyof typeof Rover>) => {
      state.rover = action.payload;
    },
    startFetching: (state) => {
      state.isFetching = true;
    },
    endFetching: (state) => {
      state.isFetching = false;
    },
  },
});

export const {
  startFetching, endFetching, setRoute, setSol, setRover,
} = controlSlice.actions;

export default controlSlice.reducer;
