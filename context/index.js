// State contexts
import createContext from "react";
import React, { useState, useEffect } from "react";
import { defOrderStatus } from "../constants/defOrderStatus";

const GlobalContext = React.createContext("");
export const GlobalProvider = ({ children }) => {
  const [dollar, setDollar] = useState({
    loading: true,
    buy: "",
    sell: "",
    change: "",
    spread: "",
  });
  const [cryptos, setCrypto] = useState([]);
  const [loaded, setLoad] = useState(false);
  // order states
  // 0: Default
  // 1: Ascending
  // 2: Descending
  const [nameOrder, setNameOrder] = useState(0);
  const [priceOrder, setPriceOrder] = useState(0);
  const [changeOrder, setChangeOrder] = useState(0);
  const [marketcapOrder, setMarketcapOrder] = useState(0);
  const [circulationOrder, setCirculationOrder] = useState(0);
  const [orderStatus, setOrderStatus] = useState(defOrderStatus);
  return (
    <GlobalContext.Provider
      value={{
        dollar: dollar,
        setDollar: setDollar,
        cryptos: cryptos,
        setCrypto: setCrypto,
        loaded: loaded,
        setLoad: setLoad,
        nameOrder: nameOrder,
        priceOrder: priceOrder,
        changeOrder: changeOrder,
        marketcapOrder: marketcapOrder,
        circulationOrder: circulationOrder,
        setNameOrder: setNameOrder,
        setPriceOrder: setPriceOrder,
        setChangeOrder: setChangeOrder,
        setMarketcapOrder: setMarketcapOrder,
        setCirculationOrder: setCirculationOrder,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const navbarContext = React.createContext("");
export const NavbarProvider = ({ children }) => {
  const [responsive, setResponsive] = React.useState("");
  return (
    <navbarContext.Provider
      value={{
        responsive: responsive,
        setResponsive: setResponsive,
      }}
    >
      {children}
    </navbarContext.Provider>
  );
};
export default GlobalContext;
