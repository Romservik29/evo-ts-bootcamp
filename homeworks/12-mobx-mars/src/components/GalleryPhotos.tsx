import { observer } from 'mobx-react-lite';
import { useStore } from '../app/store';
import MarsPhoto from './MarsPhoto';

export default observer(() => {
  const Mars = useStore("Mars");
  const { currentSol, currentRover } = useStore("Controls")
  const photos = Mars.getSolPhoto(currentSol, currentRover)
  return photos[0] ? (
    <>
      {photos.map((p) => <MarsPhoto key={p.id} photo={p} />)}
    </>

  ) : <span>Photos not found</span>;
})
