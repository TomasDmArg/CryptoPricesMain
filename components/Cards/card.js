import React, { useState, useEffect, useContext } from "react";
import Skeletons from "./skeletons";
import DollarCard from "./dollarCard";
import CryptoCard from "./cryptoCard";
import ListDollarCard from "./listDollarCard";
import ListCryptoCard from "./listCryptoCard";
import TableHead from "./tableHead";

import GlobalContext from "../../context/index";
import getAllCriptos from "../../hooks/allCriptosFetch";
import getBlueDollar from "../../hooks/blueDollarFetch";
import {
  orderByRank,
  orderByName,
  orderByPrice,
  orderByChange,
  orderByCirculation,
} from "./order";

const CardContainer = ({ grid }) => {
  const { cryptos, dollar, loaded } = React.useContext(GlobalContext);
  // Get values from context
  getBlueDollar();
  getAllCriptos();

  return (
    <section
      className={
        grid == "grid" ? "all-card-container" : "all-card-container-list"
      }
      id="content"
    >
      {grid == "grid" ? (
        <DollarCard
          loading={dollar.loading}
          buy={dollar.buy}
          sell={dollar.sell}
        />
      ) : (
        <ListDollarCard
          loading={dollar.loading}
          buy={dollar.buy}
          sell={dollar.sell}
          change={dollar.change}
          spread={parseFloat(dollar.spread).toFixed(2)}
        />
      )}
      {grid == "list" ? (
        <TableHead>
          <h4
            className="card-container__table-head--item"
            onClick={() => {
              orderByRank();
            }}
          >
            #
          </h4>
          <h4
            className="card-container__table-head--item"
            id="name"
            onClick={() => {
              orderByName();
            }}
          >
            Nombre
          </h4>
          <h4
            className="card-container__table-head--item"
            onClick={() => {
              orderByPrice();
            }}
          >
            Precio USD
          </h4>
          <h4
            className="card-container__table-head--item"
            onClick={() => {
              orderByPrice();
            }}
          >
            Precio ARS
          </h4>
          <h4
            className="card-container__table-head--item"
            onClick={() => {
              orderByChange();
            }}
          >
            24hrs
          </h4>
          <h4
            className="card-container__table-head--item"
            onClick={() => {
              orderByRank();
            }}
          >
            MarketCap
          </h4>
          <h4
            className="card-container__table-head--item circ"
            onClick={() => {
              orderByCirculation();
            }}
          >
            Circulación
          </h4>
        </TableHead>
      ) : (
        <></>
      )}

      {loaded ? (
        <Skeletons count={5}></Skeletons>
      ) : (
        cryptos.map((crypto, index) => {
          return grid == "grid" ? (
            <CryptoCard
              key={index}
              name={crypto.name}
              symbol={crypto.symbol}
              price={crypto.price}
              change={crypto.change}
              image={crypto.image}
              id={crypto.id}
              priceUSD={crypto.usdPrice}
            />
          ) : (
            <ListCryptoCard
              key={index}
              name={crypto.name}
              symbol={crypto.symbol}
              price={crypto.price}
              change={crypto.change}
              image={crypto.image}
              id={crypto.id}
              rank={crypto.rank}
              usdPrice={crypto.usdPrice}
              marketcap={crypto.marketCap}
              supply={crypto.circ}
              total={crypto.total}
            />
          );
        })
      )}
    </section>
  );
};
export default CardContainer;
