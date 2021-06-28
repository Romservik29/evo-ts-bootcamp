import SelectAlbum from './SelectAlbum';
import NumberInput from './NumberInput';
import SelectRover from './SelectRover';
import Loader from './Loader'
import { useStore } from '../app/store';
import { observer } from 'mobx-react-lite';


export default observer(() => {
  const Mars = useStore("Mars")
  const Controls = useStore("Controls")

  const fetchPhoto = async () => {
    Controls.setIsFetching(true)
    await Mars.fetchSol(Controls.currentSol, Controls.currentRover)
    
    Controls.setIsFetching(false)
  };
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
    }}
    >
      <SelectAlbum />
      <div>
        <h3>
          Select Sol and press button &apos;load&apos;
        </h3>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <SelectRover />
        <label>
          Sol
          <NumberInput />
        </label>
        <button type="button" onClick={fetchPhoto}>Load</button>
      </div>
      <Loader/>
    </div>
  );
})
