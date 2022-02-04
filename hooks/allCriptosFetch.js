import React, { useEffect, useState, useContext } from "react";
import GlobalProvider from "../context/index";
import { getSession, saveSession } from "../LocalStorage/localstorage";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
const getAlLCriptos = () => {
  const { cryptos, setCrypto, setLoad } = useContext(GlobalProvider);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd")
      .then((response) => response.json())
      .then((data) => {
        fetch("https://beta.belo.app/public/price")
          .then((response) => response.json())
          .then((data2) => {
            let res = [];
            // Search pairCode "USDT/ARS" in data2 and return index
            let index = data2.findIndex((item) => item.pairCode == "USDT/ARS");
            console.log(index);
            for (let i = 0; i < 100; i++) {
              let symbol = data[i].symbol.toUpperCase();
              let name =
                data[i].name.split(" ").length > 2 ? symbol : data[i].name;
              res.push({
                name: capitalizeFirstLetter(name),
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
                hiddenPrice: data[i].current_price.toFixed(3),
              });
            }
            setCrypto(res);
            getSession("def_order") == null
              ? saveSession(res, "def_order")
              : null;
            setLoad(false);
          });
      });
  }, []);
};
export default getAlLCriptos;
