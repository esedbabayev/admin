import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [
      "T-Shirts",
      "Shirts",
      "Jeans",
      "Hoodie",
      "Shorts",
    ],
    selectedCategories: [],
  },
  reducers: {
    selectCategories: (state, action) => {
      const selectedCategory = action.payload;
      console.log(selectedCategory);

      // state.selectedCategories = [
      //   ...state.selectedCategories,
      //   selectedCategory,
      // ];

      // state.selectedCategories =
      //   state.selectedCategories.push(selectedCategory);

      // if (state.selectedCategories.length) {
      //   state.selectedCategories.splice(0, length, selectedCategory);
      // }
    },
  },
});

export const { selectCategories } = categorySlice.actions;
