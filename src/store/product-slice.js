import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    originalproducts: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.originalproducts = action.payload;
    },
    clearProducts(state) {
      state.products = [];
      state.originalproducts = action.payload;
    },
    reduceProductQuantity(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity--;
        }
        return product;
      });
    },
    increaseProductQuantity(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity++;
        }
        return product;
      });
    },
    increaseProductQuantityByValue(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = product.quantity + action.payload.value;
        }
        return product;
      });
    },
  },
});

export const {
  setProducts,
  clearProducts,
  reduceProductQuantity,
  increaseProductQuantity,
  increaseProductQuantityByValue,
} = productSlice.actions;
export default productSlice.reducer;
