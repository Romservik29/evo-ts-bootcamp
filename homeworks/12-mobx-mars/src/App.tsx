import './App.css';
import PhotoContainer from './components/PhotoContainer';
import Controls from './components/Controls';

function App(): JSX.Element {
  return (
    <div className="App">
      <Controls />
      <PhotoContainer /> 
    </div>
  );
}

export default App;
