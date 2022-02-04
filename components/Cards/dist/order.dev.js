"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderByCirculation = exports.orderByChange = exports.orderByPrice = exports.orderByName = exports.orderByRank = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../../context/index"));

var _localstorage = require("../../LocalStorage/localstorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var orderByRank = function orderByRank() {
  var _useContext = (0, _react.useContext)(_index["default"]),
      cryptos = _useContext.cryptos,
      setCrypto = _useContext.setCrypto,
      setMarketcapOrder = _useContext.setMarketcapOrder,
      marketcapOrder = _useContext.marketcapOrder;

  switch (marketcapOrder) {
    case 0:
      var def = cryptos;
      var res = [];

      for (var i = 0; i < def.length; i++) {
        res.push(def[def.length - 1 - i]);
      }

      setCrypto(res);
      setMarketcapOrder(1);
      break;

    case 1:
      setCrypto((0, _localstorage.getSession)("def_order"));
      setMarketcapOrder(0);
      break;
  }
};

exports.orderByRank = orderByRank;

var orderByName = function orderByName() {
  var _useContext2 = (0, _react.useContext)(_index["default"]),
      cryptos = _useContext2.cryptos,
      setCrypto = _useContext2.setCrypto,
      setNameOrder = _useContext2.setNameOrder,
      nameOrder = _useContext2.nameOrder;

  var res = cryptos;

  switch (nameOrder) {
    case 0:
      res.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      setCrypto(res);
      setNameOrder(1);
      break;

    case 1:
      res.sort(function (a, b) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      setCrypto(res);
      setNameOrder(2);
      break;

    case 2:
      setCrypto((0, _localstorage.getSession)("def_order"));
      setNameOrder(0);
      break;
  }
};

exports.orderByName = orderByName;

var orderByPrice = function orderByPrice() {
  var _useContext3 = (0, _react.useContext)(_index["default"]),
      cryptos = _useContext3.cryptos,
      setCrypto = _useContext3.setCrypto,
      setPriceOrder = _useContext3.setPriceOrder,
      priceOrder = _useContext3.priceOrder; // Sort by price using hiddenPrice


  if (priceOrder == 0) {
    var res = cryptos;
    res.sort(function (a, b) {
      if (parseFloat(a.hiddenPrice) > parseFloat(b.hiddenPrice)) return 1;
      if (parseFloat(a.hiddenPrice) < parseFloat(b.hiddenPrice)) return -1;
      return 0;
    });
    setCrypto(res);
    setPriceOrder(1);
  } else if (priceOrder == 1) {
    var _res = cryptos;

    _res.sort(function (a, b) {
      if (parseFloat(a.hiddenPrice) > parseFloat(b.hiddenPrice)) return -1;
      if (parseFloat(a.hiddenPrice) < parseFloat(b.hiddenPrice)) return 1;
      return 0;
    });

    setCrypto(_res);
    setPriceOrder(2);
  } else if (priceOrder == 2) {
    var _res2 = (0, _localstorage.getSession)("def_order");

    setCrypto(_res2);
    setPriceOrder(0);
  }
};

exports.orderByPrice = orderByPrice;

var orderByChange = function orderByChange() {
  var _useContext4 = (0, _react.useContext)(_index["default"]),
      cryptos = _useContext4.cryptos,
      setCrypto = _useContext4.setCrypto,
      setChangeOrder = _useContext4.setChangeOrder,
      changeOrder = _useContext4.changeOrder; // Sort by change using change


  if (changeOrder == 0) {
    var res = cryptos;
    res.sort(function (a, b) {
      if (parseFloat(a.change) > parseFloat(b.change)) return 1;
      if (parseFloat(a.change) < parseFloat(b.change)) return -1;
      return 0;
    });
    setCrypto(res);
    setChangeOrder(1);
  } else if (changeOrder == 1) {
    var _res3 = cryptos;

    _res3.sort(function (a, b) {
      if (parseFloat(a.change) > parseFloat(b.change)) return -1;
      if (parseFloat(a.change) < parseFloat(b.change)) return 1;
      return 0;
    });

    setCrypto(_res3);
    setChangeOrder(2);
  } else if (changeOrder == 2) {
    var _res4 = (0, _localstorage.getSession)("def_order");

    setCrypto(_res4);
    setChangeOrder(0);
  }
};

exports.orderByChange = orderByChange;

var orderByCirculation = function orderByCirculation() {
  var _useContext5 = (0, _react.useContext)(_index["default"]),
      cryptos = _useContext5.cryptos,
      setCrypto = _useContext5.setCrypto,
      setCirculationOrder = _useContext5.setCirculationOrder,
      circulationOrder = _useContext5.circulationOrder; // Sort by numbers, using circ


  if (circulationOrder == 0) {
    var res = cryptos;
    res.sort(function (a, b) {
      if (parseFloat(a.circ) > parseFloat(b.circ)) return 1;
      if (parseFloat(a.circ) < parseFloat(b.circ)) return -1;
      return 0;
    });
    setCrypto(res);
    setCirculationOrder(1);
  }

  if (circulationOrder == 1) {
    var _res5 = cryptos;

    _res5.sort(function (a, b) {
      if (parseFloat(a.circ) > parseFloat(b.circ)) return -1;
      if (parseFloat(a.circ) < parseFloat(b.circ)) return 1;
      return 0;
    });

    setCrypto(_res5);
    setCirculationOrder(2);
  }

  if (circulationOrder == 2) {
    var _res6 = (0, _localstorage.getSession)("def_order");

    setCrypto(_res6);
    setCirculationOrder(0);
  }
};

exports.orderByCirculation = orderByCirculation;