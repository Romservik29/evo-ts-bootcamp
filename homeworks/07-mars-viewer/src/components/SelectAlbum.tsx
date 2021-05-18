/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setRoute } from '../features/control/controlSlice';
import classes from './selectAlbum.module.css';

export default function SelectAlbum(): JSX.Element {
  const dispatch = useDispatch();
  const route = useSelector((state: RootState) => state.controls.route);
  const handleClick = () => {
    route === 'gallery'
      ? dispatch(setRoute('favorite'))
      : dispatch(setRoute('gallery'));
  };

  return (
    <div role="button" tabIndex={0} onClick={handleClick}>
      <span className={route === 'favorite' ? classes.select : ''}>
        Gallery
      </span>
      |
      <span className={route === 'gallery' ? classes.select : ''}>
        Favorites
      </span>
    </div>
  );
}
