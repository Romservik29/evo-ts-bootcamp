import './App.css';
import { useSelector } from 'react-redux';
import PhotoContainer from './components/PhotoContainer';
import Controls from './components/Controls';
import { RootState } from './app/store';
import { Status } from './components/Loader';

function App(): JSX.Element {
  const loading = useSelector((state: RootState) => state.mars.isFetching);

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
