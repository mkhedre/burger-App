import { configureStore } from "@reduxjs/toolkit";
import BurgerReducer from "./features/BurgerSlice";
export const store = configureStore({
  reducer: {
    burger: BurgerReducer,
  },
});
