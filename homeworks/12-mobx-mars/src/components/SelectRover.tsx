import { useStore } from "../app/store";
import { Rover } from "../app/types";
import { observer } from "mobx-react-lite";


export default observer( () => {
  const Controls = useStore("Controls")
  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    Controls.setRover(e.target.value as Rover)
  };

  return (
    <div>
      <select onChange={handleClick} value={Controls.currentRover}>
        {Controls.rovers.map((v) => <option key={v}>{v}</option>)}
      </select>
    </div>
  );
})
