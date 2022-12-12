import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount, resetValue } from '../redux/counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span>{count}</span>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(7))}
        >
          Increment Any
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementByAmount(7))}
        >
          Decrement Any
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(resetValue())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}