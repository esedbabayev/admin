import { createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
  name: "size",
  initialState: {
    sizes: [

      "XS", "S", "M", "L", "XL", "XXL"
    ],
    selectedSizes: [],
  },
  reducers: {
    // setsizes: (state, action) => {},
    selectsizes: (state, action) => {},
  },
});

export const { selectsizes } = sizeSlice.actions;
