import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./Cart/cartSlice";

export const storeData = configureStore({
  reducer: {
    cartApi: cartSliceReducer,
  },
});
