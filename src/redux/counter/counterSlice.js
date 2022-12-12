import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    resetValue: (state) => {
      state.value = 0;
    }
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, resetValue } =
  counterSlice.actions;

export default counterSlice.reducer