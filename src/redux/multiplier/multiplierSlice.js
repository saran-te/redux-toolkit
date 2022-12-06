import { createSlice } from "@reduxjs/toolkit";

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
  },
});


export const { multiplyTwo, multiplyThree, multiplyByAmount } =
  multiplierSlice.actions;

export default multiplierSlice.reducer;
