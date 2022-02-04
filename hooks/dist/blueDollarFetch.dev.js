"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../context/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getBlueDollar = function getBlueDollar() {
  var _React$useContext = _react["default"].useContext(_index["default"]),
      setDollar = _React$useContext.setDollar;

  (0, _react.useEffect)(function () {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then(function (response) {
      return response.json();
    }).then(function (data3) {
      setDollar({
        loading: false,
        buy: data3[1].casa.venta,
        sell: data3[1].casa.compra,
        change: data3[1].casa.variacion,
        spread: (parseInt(data3[1].casa.venta) - parseInt(data3[1].casa.compra)) / parseInt(data3[1].casa.venta) * 100
      });
    });
  }, []);
};

var _default = getBlueDollar;
exports["default"] = _default;