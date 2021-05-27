import { configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import controls from '../features/control/controlSlice';
import mars from '../features/marsGallery/marsGallerySlice';

const composeEnhancers = compose;
const store = configureStore({
  reducer: {
    mars,
    controls,
  },
});

export type RootState = ReturnType<typeof store.getState>;
composeEnhancers(applyMiddleware(thunk));
export default store;
