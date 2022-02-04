"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../context/index"));

var _localstorage = require("../LocalStorage/localstorage");

var _capitalizeFirstLetter = require("../utils/capitalizeFirstLetter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getAlLCriptos = function getAlLCriptos() {
  var _useContext = (0, _react.useContext)(_index["default"]),
      cryptos = _useContext.cryptos,
      setCrypto = _useContext.setCrypto,
      setLoad = _useContext.setLoad;

  (0, _react.useEffect)(function () {
    fetch("https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd").then(function (response) {
      return response.json();
    }).then(function (data) {
      fetch("https://beta.belo.app/public/price").then(function (response) {
        return response.json();
      }).then(function (data2) {
        var res = []; // Search pairCode "USDT/ARS" in data2 and return index

        var index = data2.findIndex(function (item) {
          return item.pairCode == "USDT/ARS";
        });
        console.log(index);

        for (var i = 0; i < 100; i++) {
          var symbol = data[i].symbol.toUpperCase();
          var name = data[i].name.split(" ").length > 2 ? symbol : data[i].name;
          res.push({
            name: (0, _capitalizeFirstLetter.capitalizeFirstLetter)(name),
            symbol: symbol,
            price: data[i].current_price.toFixed(3),
            change: data[i].price_change_percentage_24h,
            image: data[i].image,
            id: data[i].id,
            rank: data[i].market_cap_rank,
            usdPrice: parseFloat(data2[index].bid),
            marketCap: data[i].market_cap,
            circ: data[i].circulating_supply,
            total: data[i].total_supply,
            hiddenPrice: data[i].current_price.toFixed(3)
          });
        }

        setCrypto(res);
        (0, _localstorage.getSession)("def_order") == null ? (0, _localstorage.saveSession)(res, "def_order") : null;
        setLoad(false);
      });
    });
  }, []);
};

var _default = getAlLCriptos;
exports["default"] = _default;