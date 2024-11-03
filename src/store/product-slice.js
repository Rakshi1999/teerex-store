import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    clearPrducts(state) {
      state.products = [];
    },
    reduceProductQuantity(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity--;
        }
        return product;
      });
    },
  },
});

export const { setProducts, clearPrducts, reduceProductQuantity } =
  productSlice.actions;
export default productSlice.reducer;
