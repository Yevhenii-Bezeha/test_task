import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://661d83ea98427bbbef0205c3.mockapi.io/",
});

export const fetchCampersThunk = createAsyncThunk(
  "fetchAllCampers",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await instance.get("fetchAllCampers", {
        params: {
          page: page,
          limit: limit,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
