import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/slices/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../../store/slices/counterSlice';

const Add = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        {count}
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() =>        dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
};

export default Add;