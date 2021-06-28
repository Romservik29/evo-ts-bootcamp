import { observer } from 'mobx-react-lite';
import { useStore } from '../app/store';
import MarsPhoto from './MarsPhoto';

export default observer(() => {
  const Mars = useStore("Mars")
  const photo = Mars.getFavoritesPhoto()
  return photo[0] ? (
    <>
      {photo.map((p) => <MarsPhoto key={p.id} photo={p} />)}
    </>
  ) : <span>You have not favorites photo</span>;
}
)