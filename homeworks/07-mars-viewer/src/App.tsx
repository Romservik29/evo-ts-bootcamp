import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PhotoContainer from './components/PhotoContainer';
import Controls from './components/Controls';
import { getPhotos } from './features/marsGallery/marsGallerySlice';
import { RootState } from './app/store';
import { Loader } from './components/Loader';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.mars.isFetching);
  useEffect(() => {
    dispatch(getPhotos(1));
  },
  [dispatch]);
  return (
    <div className="App">
      <Controls />
      {loading
        ? <Loader />
        : <PhotoContainer />}
    </div>
  );
}

export default App;
