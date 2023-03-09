import { createSlice } from "@reduxjs/toolkit";

const defaultState = [
  { id: Math.random(), name: "Item 1", price: 10, probability: 0.1 },
  { id: Math.random(), name: "Item 2", price: 20, probability: 0.05 },
  { id: Math.random(), name: "Item 3", price: 0, probability: 0.85 },
];

const caseItemsSlice = createSlice({
  name: "caseItems",
  initialState: {
    caseItems: defaultState,
  },
  reducers: {
    addCaseItem(state, action) {
      state.caseItems.push(action.payload);
    },
    removeCaseItem(state, action) {
      state.caseItems = state.caseItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const caseItemsActions = caseItemsSlice.actions;
export default caseItemsSlice;
