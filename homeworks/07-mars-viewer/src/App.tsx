import './App.css';
import PhotoContainer from './components/PhotoContainer';
import Controls from './components/Controls';
import { Loader } from './components/Loader';

function App(): JSX.Element {
  return (
    <div className="App">
      <Controls />
      <Loader />
      <PhotoContainer />
    </div>
  );
}

export default App;
