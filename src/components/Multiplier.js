import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  multiplyTwo,
  multiplyThree,
  multiplyByAmount,
  resetValue
} from "../redux/multiplier/multiplierSlice";

export function Multiplier() {
  const count = useSelector((state) => state.multiplier.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(multiplyTwo())}
        >
          Multiply 2
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(multiplyThree())}
        >
          Multiply 3
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(multiplyByAmount(5))}
        >
          Multiply Any
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(resetValue())}
        >
          Reset
        </button>

        {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(increment(5))}
        >
          Increment Any
        </button> */}

        <span>{count}</span>
      </div>
    </div>
  );
}
