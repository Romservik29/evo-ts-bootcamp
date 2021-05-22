/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import {
  AnyAction, createSlice, PayloadAction, ThunkDispatch,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Photo } from '../../types';
import { endFetching, startFetching } from '../control/controlSlice';
import { Rover } from './rovers';

type Rovers = [Rover.Curiosity, Rover.Opportunity, Rover.Perseverance, Rover.Spirit];
type Sol = {
  sol: number,
  photosId: number[]
};

export interface MarsGallery {
  photos: Photo[]
  favorites: number[],
  sols: Array<Sol>,
  rovers: Rovers,
}

const initialState: MarsGallery = {
  photos: [],
  favorites: [],
  sols: [],
  rovers: [Rover.Curiosity, Rover.Opportunity, Rover.Perseverance, Rover.Spirit],
};

const marsGallerySlice = createSlice({
  name: 'marsGallery',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.photos = [...state.photos, ...action.payload];
    },
    addToFavorites: (state, action: PayloadAction<number>) => {
      state.favorites.unshift(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    addSol: (state, action: PayloadAction<Sol>) => {
      state.sols.push(action.payload);
    },
  },
});

export const {
  addSol, setPhotos, addToFavorites, removeFromFavorites,
} = marsGallerySlice.actions;

export const getPhotos = (sol: number, rover: keyof typeof Rover) => (
  dispatch: ThunkDispatch<MarsGallery, MarsGallery, AnyAction>,
) => {
  dispatch(startFetching());
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${process.env.REACT_APP_NASA_KEY}`).then((res) => {
    const photos = res.data.photos as Photo[];
    dispatch(setPhotos(photos));
    dispatch(addSol({ sol, photosId: photos.map((p) => p.id) }));
    setTimeout(() => dispatch(endFetching()));
  }).catch(() => { dispatch(endFetching()); });
};

export default marsGallerySlice.reducer;
