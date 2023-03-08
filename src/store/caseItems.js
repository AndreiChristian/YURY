import { createSlice } from "@reduxjs/toolkit";

const defaultState = [
  { name: "Item 1", price: 10, probability: 0.1 },
  { name: "Item 2", price: 20, probability: 0.05 },
  { name: "Item 3", price: 0, probability: 0.85 },
];

const caseItemsSlice = createSlice({
  name: "caseItems",
  initialState: {
    caseItems: defaultState,
  },
  reducers: {},
});

export const caseItemsActions = caseItemsSlice.actions;
export default caseItemsSlice.reducer;
