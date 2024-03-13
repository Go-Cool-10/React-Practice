import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number_1: 0,
  number_2: 0,
  result: 0
};

export const ArithmeticSlice = createSlice({
  name: "arithmetic",
  initialState,
  reducers: {
    add: (state, action) => {
      let { number_1, number_2 } = action.payload;
      state.number_1 = number_1;
      state.number_2 = number_2;
      state.result = Number(number_1) + Number(number_2);
    },
    sub: (state, action) => {
      let { number_1, number_2 } = action.payload;
      state.number_1 = number_1;
      state.number_2 = number_2;
      state.result = Number(number_1) - Number(number_2);
    },
    mul: (state, action) => {
      let { number_1, number_2 } = action.payload;
      state.number_1 = number_1;
      state.number_2 = number_2;
      state.result = Number(number_1) * Number(number_2);
    },
    div: (state, action) => {
      let { number_1, number_2 } = action.payload;
      state.number_1 = number_1;
      state.number_2 = number_2;
      state.result = Number(number_1) / Number(number_2);
    },
  },
});

export const { add, sub, mul, div} = ArithmeticSlice.actions;
export default ArithmeticSlice.reducer;
