/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setRover } from '../features/control/controlSlice';
import { Rover } from '../features/marsGallery/rovers';

export default function SelectRover(): JSX.Element {
  const rovers = useSelector((state: RootState) => state.mars.rovers);
  const dispatch = useDispatch();
  const selectCurrentRover = useSelector((state: RootState) => state.controls.rover);
  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRover(e.target.value as Rover));
  };

  return (
    <div>
      <select onChange={handleClick} value={selectCurrentRover}>
        {rovers.map((v) => <option key={v}>{v}</option>)}
      </select>
    </div>
  );
}
