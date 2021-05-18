/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import {
  AnyAction, createSlice, PayloadAction, ThunkDispatch,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Photo } from '../../types';

export interface MarsGallery {
  photos: Photo[]
  favorites: Photo[],
  isFetching: boolean
}

const initialState: MarsGallery = {
  photos: [],
  favorites: [],
  isFetching: false,
};

const marsGallerySlice = createSlice({
  name: 'marsGallery',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.photos = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<Photo>) => {
      state.favorites.unshift(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<Photo>) => {
      state.favorites = state.favorites.filter((p) => p.id !== action.payload.id);
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
  startFetching, endFetching, setPhotos, addToFavorites, removeFromFavorites,
} = marsGallerySlice.actions;

export const getPhotos = (sol: number) => (
  dispatch: ThunkDispatch<MarsGallery, MarsGallery, AnyAction>,
) => {
  dispatch(startFetching());
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sol}&api_key=${process.env.REACT_APP_NASA_KEY}`).then((res) => {
    const photos = res.data.photos as Photo[];
    dispatch(setPhotos(photos));
    setTimeout(() => dispatch(endFetching()));
  }).catch(() => { dispatch(endFetching()); });
};

export default marsGallerySlice.reducer;
