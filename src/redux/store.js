// Redux store (store.js)
import { configureStore } from "@reduxjs/toolkit";
import brushesReducer from "./brushes/brushesSlice";
import filterReducer from "./filter/filterSlice";
import searchReducer from "./search/searchSlice";

const store = configureStore({
  reducer: {
    brushes: brushesReducer,
    filters: filterReducer,
    search: searchReducer
  }
});

export default store;
