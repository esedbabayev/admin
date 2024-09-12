import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: {
      mensClothing: [
        "T-Shirts",
        "Shirts",
        "Jeans",
        "Trousers",
        "Jackets & Coats",
        "Suits",
        "Activewear",
        "Underwear & Socks",
      ],
      womensClothing: [
        "Dresses",
        "Tops & Blouses",
        "Skirts",
        "Jeans",
        "Leggings",
        "Jackets & Coats",
        "Activewear",
        "Lingerie",
      ],
      selectedCategories: [],
    },
  },
  reducers: {
    selectCategories: (state, action) => {},
  },
});

export const { selectCategories } = categorySlice.actions;
