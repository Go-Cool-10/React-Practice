import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartIndex: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let cartItem = {
        cartID: state.cartIndex++,
        product: action.payload,
      };
      state.cart.push(cartItem);
    },
  },
});
export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
