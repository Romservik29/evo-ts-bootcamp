import { configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import controls from '../features/control/controlSlice';
import mars from '../features/marsGallery/marsGallerySlice';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
  reducer: {
    mars,
    controls,
  },
});

export type RootState = ReturnType<typeof store.getState>;
composeEnhancers(applyMiddleware(thunk));
export default store;
