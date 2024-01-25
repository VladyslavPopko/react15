import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PIZZA_API } from "../../constanses";

const initialState = {
  menuItems: [],
  isLoading: false,
  isError: false,
};

export const getMenuItems = createAsyncThunk("cart/getMenuItems", async () => {
  try {
    const res = await fetch(`${PIZZA_API}/menu`);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    return data.data;
  } catch (e) {
    console.error(e.message);
  }
});

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMenuItems.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getMenuItems.fulfilled, (state, { payload }) => {
      state.menuItems = payload;
      state.isLoading = false;
    });
    builder.addCase(getMenuItems.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default pizzaSlice.reducer;
