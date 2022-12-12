import { createSlice } from "@reduxjs/toolkit";
// import { increment } from "../counter/counterSlice";

const initialState = {
  value: 1,
};

export const multiplierSlice = createSlice({
  name: "multiplier",
  initialState,
  reducers: {
    multiplyTwo: (state) => {
      state.value *= 2;
    },
    multiplyThree: (state) => {
      state.value *= 3;
    },
    multiplyByAmount: (state, action) => {
      state.value *= action.payload;
    },

    increment: (state, action) => {
      state.value += action.payload;
    },

    resetValue: (state) => {
      state.value = 0;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(increment, state => {
  //      return state.value += 1
  //   });
  // },
});


export const { multiplyTwo, multiplyThree, multiplyByAmount, resetValue } =
  multiplierSlice.actions;

export default multiplierSlice.reducer;
