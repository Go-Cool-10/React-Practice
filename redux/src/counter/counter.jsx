import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./CounterSlice";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  let [inc, setInc] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{count}</span> <br />
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button aria-label="Reset" onClick={() => dispatch(reset())}>
        reset
      </button>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      Enter the number:{" "}
      <input type="number" value={inc} onChange={(e) => setInc(e.target.value)} />
      <button
        aria-label="Reset"
        onClick={() => dispatch(incrementByAmount(Number(inc)))}
      >
        {inc}
      </button>
    </div>
  );
};
export default Counter;
