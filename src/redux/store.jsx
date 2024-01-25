import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import pizzaReducer from "./slices/pizzaSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pizza: pizzaReducer,
    user: userReducer,
  },
});
