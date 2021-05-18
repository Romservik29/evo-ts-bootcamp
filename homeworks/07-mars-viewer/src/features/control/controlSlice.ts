/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rover } from '../marsGallery/rovers';

export interface ControlsReducer {
  sols: number,
  route: 'gallery' | 'favorite',
  rover: keyof typeof Rover,
}

const initialState: ControlsReducer = {
  sols: 1,
  route: 'gallery',
  rover: Rover.Curiosity,
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
  },
});

export const { setRoute, setSol } = controlSlice.actions;

export default controlSlice.reducer;
