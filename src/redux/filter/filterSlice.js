import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBrand: [],
  filterCollection: [],
  filterTag: []
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
    }
  }
});

export const { setFilterBrand, setFilterCollection, setFilterTag } =
  filterSlice.actions;
export default filterSlice.reducer;
