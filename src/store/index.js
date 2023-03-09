import { configureStore } from "@reduxjs/toolkit";
import caseItemsSlice from "./caseItems";
import caseItems from "./caseItems";

const store = configureStore({
  reducer: {
    caseItems: caseItemsSlice.reducer,
  },
});

export default store;
