import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingrediants: {
    salad: 1,
    meat: 2,
    bacon: 1,
    cheese: 3,
  },
  ingrediantPrice: {
    salad: 1.5,
    meat: 2,
    bacon: 0.5,
    cheese: 1,
  },
  controls: [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
  ],
};

export const BurgerSlice = createSlice({
  name: "Burger",
  initialState,
  reducers: {
    addslice: (state, { payload }) => {
      state.ingrediants[payload] += 1;
    },
    deleteSlice: (state, { payload }) => {
      state.ingrediants[payload] > 0
        ? (state.ingrediants[payload] -= 1)
        : (state.ingrediants[payload] = 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addslice, deleteSlice } = BurgerSlice.actions;
export default BurgerSlice.reducer;
