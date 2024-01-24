import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);

      if (item) {
        item.qty = item.qty + 1;
      } else {
        state.items.push({ ...payload, qty: 1 });
      }
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
    decrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);
      if (item.qty <= 1) {
        state.items = state.items.filter((item) => item.id !== payload);
      }
      item.qty = item.qty - 1;
    },
    incrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);

      item.qty = item.qty + 1;
    },
    resetCart: (state, { payload }) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decrementQty,
  incrementQty,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
