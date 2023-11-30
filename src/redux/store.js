import { configureStore } from "@reduxjs/toolkit";

import { currencyReducer } from "./slice";

export const store = configureStore({
  reducer: currencyReducer,
});
