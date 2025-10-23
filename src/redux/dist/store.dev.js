"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _brushesSlice = _interopRequireDefault(require("./brushes/brushesSlice"));

var _filterSlice = _interopRequireDefault(require("./filter/filterSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Redux store (store.js)
var store = (0, _toolkit.configureStore)({
  reducer: {
    brushes: _brushesSlice["default"],
    filters: _filterSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;