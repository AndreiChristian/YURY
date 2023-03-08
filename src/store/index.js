import { configureStore } from "@reduxjs/toolkit";
import caseItems from "./caseItems";

const store = configureStore({
  reducer: {
    caseItems: caseItems.reducer,
  },
});

export default store;
