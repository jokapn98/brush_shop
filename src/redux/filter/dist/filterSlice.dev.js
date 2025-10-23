"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setFilterTag = exports.setFilterCollection = exports.setFilterBrand = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  filterBrand: [],
  filterCollection: [],
  filterTag: []
};
var filterSlice = (0, _toolkit.createSlice)({
  name: "filters",
  initialState: initialState,
  reducers: {
    setFilterBrand: function setFilterBrand(state, action) {
      state.filterBrand = action.payload;
    },
    setFilterCollection: function setFilterCollection(state, action) {
      state.filterCollection = action.payload;
    },
    setFilterTag: function setFilterTag(state, action) {
      state.filterTag = action.payload;
    }
  }
});
var _filterSlice$actions = filterSlice.actions,
    setFilterBrand = _filterSlice$actions.setFilterBrand,
    setFilterCollection = _filterSlice$actions.setFilterCollection,
    setFilterTag = _filterSlice$actions.setFilterTag;
exports.setFilterTag = setFilterTag;
exports.setFilterCollection = setFilterCollection;
exports.setFilterBrand = setFilterBrand;
var _default = filterSlice.reducer;
exports["default"] = _default;