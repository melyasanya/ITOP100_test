import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
        // {
        //   params: {
        //     apikey: "fca_live_S3NBZ0w3ZmieLS9PEdYgbmPk9RKyda5RNwMX6krM",
        //     base_currency: "UAH",
        //     currencies: "EUR, USD, CAD",
        //   },
        // }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
