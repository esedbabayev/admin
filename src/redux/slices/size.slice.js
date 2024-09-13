import { createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
  name: "size",
  initialState: {
    sizes: [],
    selectedSizes: [],
  },
  reducers: {
    // setsizes: (state, action) => {},
    selectsizes: (state, action) => {},
  },
});

export const { selectsizes } = sizeSlice.actions;
