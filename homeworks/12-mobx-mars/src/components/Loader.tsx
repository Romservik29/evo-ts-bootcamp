import { observer } from 'mobx-react-lite';
import { useStore } from '../app/store';

export default observer(() => {
  const { isFetching } = useStore("Controls")
  return isFetching ? (
    <span>
      Loading...
    </span>
  )
    : null;
});
