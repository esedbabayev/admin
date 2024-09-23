import { configureStore } from "@reduxjs/toolkit";

// Slices
import { categorySlice } from "./slices/category.slice.js";
import { colorSlice } from "./slices/color.slice.js";
import { sizeSlice } from "./slices/size.slice.js";

export const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    colors: colorSlice.reducer,
    sizes: sizeSlice.reducer,
  },
});
