// Redux store (store.js)
import { configureStore } from "@reduxjs/toolkit";
import brushesReducer from "./brushes/brushesSlice"; // Uveri se da si ovde definisao brushesReducer

const store = configureStore({
  reducer: {
    brushes: brushesReducer
  }
});

export default store;
