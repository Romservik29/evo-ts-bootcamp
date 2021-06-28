import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useStore } from '../app/store';
import classes from './selectAlbum.module.css'

export default observer(() => {
  const Controls = useStore("Controls")
  const handleClick = useCallback(() => {
    Controls.route === 'gallery'
      ? Controls.setRoute('favorite')
      : Controls.setRoute('gallery')
  }, [Controls]);
  return (
    <div role="button" tabIndex={0} onClick={handleClick} >
      <span className={Controls.route === 'favorite' ? classes.select : ''}>
        Gallery
      </span>
      |
      <span className={Controls.route === 'gallery' ? classes.select : ''}>
        Favorites
      </span>
    </div>
  );
}
)