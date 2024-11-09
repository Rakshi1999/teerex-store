import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    reduceProductQuantityFromCart(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity--;
        }
        return item;
      });
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart, reduceProductQuantityFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
