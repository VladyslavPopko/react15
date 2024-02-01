import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

if (localStorage.user != "") initialState.value = localStorage.user;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
