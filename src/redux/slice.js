import { createSlice } from "@reduxjs/toolkit";

import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "../utils/processingFuncs";
import { fetchCurrencies } from "./operations";

const initialState = {
  currencyData: [],
  isLoading: false,
  error: "",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, handlePending)
      .addCase(fetchCurrencies.fulfilled, handleFulfilled)
      .addCase(fetchCurrencies.rejected, handleRejected);
  },
});

export const currencyReducer = currencySlice.reducer;
