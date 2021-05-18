import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PhotoContainer from './components/PhotoContainer';
import Controls from './components/Controls';
import { getPhotos } from './features/marsGallery/marsGallerySlice';
import { RootState } from './app/store';
import { Status } from './components/Loader';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.mars.isFetching);
  const selectCurrentRover = useSelector((state: RootState) => state.controls.rover);

  useEffect(() => {
    dispatch(getPhotos(1, selectCurrentRover));
  },
  [dispatch, selectCurrentRover]);
  return (
    <div className="App">
      <Controls />
      {loading
        ? <Status />
        : <PhotoContainer />}
    </div>
  );
}

export default App;
