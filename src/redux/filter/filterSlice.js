// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBrand: [],
  filterCollection: [],
  filterTag: [],
  filterColors: [],
  colors: [],
  brands: [],
  collections: [],
  tags: [],
  minPrice: null,
  maxPrice: null
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterBrand: (state, action) => {
      state.filterBrand = action.payload;
    },
    setFilterCollection: (state, action) => {
      state.filterCollection = action.payload;
    },
    setFilterTag: (state, action) => {
      state.filterTag = action.payload;
    },
    setFilterColors: (state, action) => {
      // ime mora da se poklapa
      state.filterColors = action.payload;
    },
    setFilter: (state, action) => {
      state.filterColors = action.payload.colors || [];
      state.filterBrand = action.payload.brands || [];
      state.filterCollection = action.payload.collections || [];
      state.filterTag = action.payload.tags || [];
      state.minPrice = action.payload.minPrice ?? null;
      state.maxPrice = action.payload.maxPrice ?? null;
    }
  }
});

export const {
  setFilterBrand,
  setFilterCollection,
  setFilterTag,
  setFilterColors,
  setFilter
} = filterSlice.actions;

export default filterSlice.reducer;
