import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingrediants: {
    salad: 1,
    meat: 2,
    bacon: 1,
    cheese: 3,
  },
};

export const BurgerSlice = createSlice({
  name: "Burger",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default BurgerSlice.reducer;
