import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencies } from "./operations";

const initialState = {
  currencyData: [],
  isLoading: false,
  error: "",
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = "";
  state.currencyData = action.payload.sort((a, b) => {
    if (a.txt < b.txt) return -1;
    if (a.txt > b.txt) return 1;
    return 0;
  });
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, handlePending)
      .addCase(fetchCurrencies.fulfilled, handleFulfilled)
      .addCase(fetchCurrencies.rejected, handleRejected);
  },
});

export const currencyReducer = currencySlice.reducer;
