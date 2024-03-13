import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter/CounterSlice";
import arithmeticSliceReducer from "./arithmetic/ArithmeticSlice";
import todoSliceReducer from "./todo/todoSlice";
export const storeData = configureStore({
  reducer: {
    counter: counterSliceReducer,
    arithmetic: arithmeticSliceReducer,
    todo: todoSliceReducer,
  },
});
