import { observer } from "mobx-react-lite";
import { useStore } from "../app/store";


type InputProps = {
  min?: number
  max?: number
};

const InputDefaultProps = {
  min: 1,
  max: 1000,
};

const NumberInput = observer<InputProps>(({ min, max }) => {
  const Controls = useStore("Controls")
  const handleChanege = (e: React.ChangeEvent<HTMLInputElement>) => {
    Controls.setCurrentSol(+e.currentTarget.value)
  };
  return <input type="number" onChange={handleChanege} value={Controls.currentSol} min={min} max={max} />;
})

NumberInput.defaultProps = InputDefaultProps;

export default NumberInput;
