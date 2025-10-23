// Redux store (store.js)
import { configureStore } from "@reduxjs/toolkit";
import brushesReducer from "./brushes/brushesSlice";
import filterReducer from "./filter/filterSlice";

const store = configureStore({
  reducer: {
    brushes: brushesReducer,
    filters: filterReducer
  }
});

export default store;
