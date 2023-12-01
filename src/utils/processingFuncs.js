export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = "";
  state.currencyData = action.payload.sort((a, b) => {
    if (a.txt < b.txt) return -1;
    if (a.txt > b.txt) return 1;
    return 0;
  });
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
