"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var searchFor = function searchFor(value, res) {
  var filterResult = [];
  var tempCheck;

  if (value.length <= 4 && value.length >= 2) {
    // Filter the res array by the ones that match the value at first positions
    filterResult = res.filter(function (item) {
      return item.symbol.toLowerCase().startsWith(value.toLowerCase());
    });
    tempCheck = res.filter(function (item) {
      return item.symbol.toLowerCase() == value.toLowerCase();
    });
    if (tempCheck.length > 0) filterResult = tempCheck;
  } else if (value.length >= 2) {
    filterResult = res.filter(function (data) {
      return data.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    tempCheck = res.filter(function (item) {
      return item.name.toLowerCase() == value.toLowerCase();
    });
    if (tempCheck.length > 0) filterResult = tempCheck;
  } // Sort by the most shortest id


  if (filterResult.length > 0) filterResult.sort(function (a, b) {
    return a.id.length - b.id.length;
  });
  return filterResult;
};

var _default = searchFor;
exports["default"] = _default;