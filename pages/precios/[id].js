import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
const indPage = () => {
  const router = useRouter();
  let {
    name,
    symbol,
    ars,
    usd,
    low,
    high,
    percent,
    mkp,
    circulating,
    total,
    ath,
  } = " ";
  const { id } = router.query;
  return (
    <React.Fragment>
      <Head>
        <title>{id} - CryptoPrices</title>
      </Head>
      <Navbar />
      <main>
        <section className="currencyContainer">
          <section className="currencyContainer__name">
            <section className="name__cont">
              <img className="name__cont--img" src="${img}" alt="" />
              <h2 className="name__cont--title">${name}</h2>
              <h4 className="name__cont--symbol text">${symbol}</h4>
            </section>
            <section className="price__cont">
              <h3 className="price__cont--ars">$${ars}ARS</h3>
              <h4 className="price__cont--usd text">$${usd}USD</h4>
            </section>
          </section>
          <section className="currencyContainer__converter">
            <div className="currencyContainer__converter--input-cont">
              <input
                className="currencyContainer__converter--input"
                type="number"
                value="1"
              />
              <h3 className="currencyContainer__converter--currency">
                ${symbol}
              </h3>
            </div>{" "}
            <br />
            <div className="currencyContainer__converter--input-cont">
              <input
                className="currencyContainer__converter--input inp2"
                type="number"
                value="${intLocalPrice}"
              />
              <h3 className="currencyContainer__converter--currency-options">
                $
              </h3>
              <h3 className="currencyContainer__converter--currency-options">
                U$
              </h3>
            </div>
          </section>
          <section className="currencyContainer__graph">
            <div className="tradingview-widget-container">
              <div id="tradingview_6001e"></div>
            </div>
          </section>
          <section className="currencyContainer__24hrschange">
            <section className="change__container">
              <div className="change__container--title-container">
                <h3 className="change__container--lowest">$${low}</h3>
                <h3 className="change__container--highest">$${high}</h3>
              </div>
              <div className="change__container--bar-bg">
                <div className="change__container--bar"></div>
              </div>
            </section>
          </section>
          <section className="currencyContainer__statistics">
            <h2 className="currencyContainer__statistics--title">
              Estadísticas:
            </h2>
            <h4 className="currencyContainer__statistics--item">
              {" "}
              <b> Cambio 24hrs: </b> ${percent}%
            </h4>
            <h4 className="currencyContainer__statistics--item">
              {" "}
              <b> Capitalización: </b> ${mkp}
            </h4>
            <h4 className="currencyContainer__statistics--item">
              {" "}
              <b> Monedas en circ.: </b> ${circulating}
            </h4>
            <h4 className="currencyContainer__statistics--item">
              {" "}
              <b> Total de monedas: </b> ${total}
            </h4>
            <h4 className="currencyContainer__statistics--item">
              {" "}
              <b> ATH </b> ${ath}
            </h4>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
};
export default indPage;
