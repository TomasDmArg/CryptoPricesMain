import React, { useContext } from "react";
import GlobalContext from "../../context/index";
import {
  saveLS,
  getLS,
  getSession,
  saveSession,
} from "../../LocalStorage/localstorage";

export const orderByRank = () => {
  const { cryptos, setCrypto, setMarketcapOrder, marketcapOrder } =
    useContext(GlobalContext);
  switch (marketcapOrder) {
    case 0:
      let def = cryptos;
      let res = [];
      for (let i = 0; i < def.length; i++) {
        res.push(def[def.length - 1 - i]);
      }
      setCrypto(res);
      setMarketcapOrder(1);
      break;
    case 1:
      setCrypto(getSession("def_order"));
      setMarketcapOrder(0);
      break;
  }
};
export const orderByName = () => {
  const { cryptos, setCrypto, setNameOrder, nameOrder } =
    useContext(GlobalContext);
  let res = cryptos;
  switch (nameOrder) {
    case 0:
      res.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      setCrypto(res);
      setNameOrder(1);
      break;
    case 1:
      res.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      setCrypto(res);
      setNameOrder(2);
      break;
    case 2:
      setCrypto(getSession("def_order"));
      setNameOrder(0);
      break;
  }
};
export const orderByPrice = () => {
  const { cryptos, setCrypto, setPriceOrder, priceOrder } =
    useContext(GlobalContext);
  // Sort by price using hiddenPrice
  if (priceOrder == 0) {
    let res = cryptos;
    res.sort((a, b) => {
      if (parseFloat(a.hiddenPrice) > parseFloat(b.hiddenPrice)) return 1;
      if (parseFloat(a.hiddenPrice) < parseFloat(b.hiddenPrice)) return -1;
      return 0;
    });
    setCrypto(res);
    setPriceOrder(1);
  } else if (priceOrder == 1) {
    let res = cryptos;
    res.sort((a, b) => {
      if (parseFloat(a.hiddenPrice) > parseFloat(b.hiddenPrice)) return -1;
      if (parseFloat(a.hiddenPrice) < parseFloat(b.hiddenPrice)) return 1;
      return 0;
    });
    setCrypto(res);
    setPriceOrder(2);
  } else if (priceOrder == 2) {
    let res = getSession("def_order");
    setCrypto(res);
    setPriceOrder(0);
  }
};
export const orderByChange = () => {
  const { cryptos, setCrypto, setChangeOrder, changeOrder } =
    useContext(GlobalContext);
  // Sort by change using change
  if (changeOrder == 0) {
    let res = cryptos;
    res.sort((a, b) => {
      if (parseFloat(a.change) > parseFloat(b.change)) return 1;
      if (parseFloat(a.change) < parseFloat(b.change)) return -1;
      return 0;
    });
    setCrypto(res);
    setChangeOrder(1);
  } else if (changeOrder == 1) {
    let res = cryptos;
    res.sort((a, b) => {
      if (parseFloat(a.change) > parseFloat(b.change)) return -1;
      if (parseFloat(a.change) < parseFloat(b.change)) return 1;
      return 0;
    });
    setCrypto(res);
    setChangeOrder(2);
  } else if (changeOrder == 2) {
    let res = getSession("def_order");
    setCrypto(res);
    setChangeOrder(0);
  }
};
export const orderByCirculation = () => {
  const { cryptos, setCrypto, setCirculationOrder, circulationOrder } =
    useContext(GlobalContext);
  // Sort by numbers, using circ
  if (circulationOrder == 0) {
    let res = cryptos;
    res.sort((a, b) => {
      if (parseFloat(a.circ) > parseFloat(b.circ)) return 1;
      if (parseFloat(a.circ) < parseFloat(b.circ)) return -1;
      return 0;
    });
    setCrypto(res);
    setCirculationOrder(1);
  }
  if (circulationOrder == 1) {
    let res = cryptos;
    res.sort((a, b) => {
      if (parseFloat(a.circ) > parseFloat(b.circ)) return -1;
      if (parseFloat(a.circ) < parseFloat(b.circ)) return 1;
      return 0;
    });
    setCrypto(res);
    setCirculationOrder(2);
  }
  if (circulationOrder == 2) {
    let res = getSession("def_order");
    setCrypto(res);
    setCirculationOrder(0);
  }
};
