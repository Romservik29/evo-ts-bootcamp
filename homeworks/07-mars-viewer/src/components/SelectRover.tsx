/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setRover } from '../features/control/controlSlice';
import { Rover } from '../features/marsGallery/rovers';

export default function SelectRover(): JSX.Element {
  const rovers = useSelector((state: RootState) => state.mars.rovers);
  const dispatch = useDispatch();
  const selectCurrentRover = useSelector((state: RootState) => state.controls.rover);
  const handleClick = (e: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
    dispatch(setRover(e.currentTarget.value as Rover));
  };

  return (
    <div>
      <select value={selectCurrentRover}>
        {rovers.map((v) => <option onClick={handleClick}>{v}</option>)}
      </select>
    </div>
  );
}
