import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    colors: [],
    selectedColors: [],
  },
  reducers: {
    setColors: (state, action) => {},
    selectColors: (state, action) => {},
  },
});

export const { setColors, selectColors } = colorSlice.actions;
