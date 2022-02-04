import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const convertCurrency = (x, price, priceUSD) =>
  parseFloat(x) * parseFloat(price) * parseFloat(priceUSD);

const CryptoCard = ({ name, symbol, price, change, image, id, priceUSD }) => {
  let bigText = name.length > 12 ? true : false;
  let positive = change > 0 ? true : false;
  const [converter, setConverter] = React.useState(false);
  const [converterResult, setConverterResult] = React.useState(0);
  return (
    <section className={`card-container ${positive ? "b-up" : "b-down"}`}>
      <section>
        <section className="card__name-container">
          <h2
            className={`card__name-container--title ${
              positive ? "up" : "down"
            }  ${bigText ? "t-big" : ""}`}
          >
            {name}
          </h2>
          <h4 className="text">{symbol}</h4>
        </section>
        <h3 className="price ">
          ${price < 0.001 ? price : numberWithCommas(price)}
        </h3>
        <p className="hidden-value">{price}</p>
        <h4 className={`percent ${positive ? "up" : "down"}`}>
          {change.toFixed(2)}%
        </h4>
        <section className="card-image">
          <img src={image} className="card-image-img" alt="" />
        </section>
        <section className="buttons">
          <a
            className={`card-button active seemorebtn ${
              positive ? "" : "btn-down"
            }`}
          >
            Ver mas
          </a>
          <a
            className="card-button-2  convert text"
            onClick={() => {
              setConverter(true);
            }}
          >
            Convertir
          </a>
        </section>
        <div
          className={`bg ${converter ? "cv-bg-active" : "cv-bg-hide"} ${
            !positive ? "down" : ""
          }`}
        ></div>
        <h2 className={`bg-text title ${converter ? "cv-active" : ""}`}>
          Convertir {name} a <span className="bg-text__currency">ARS</span>
        </h2>
        <input
          type="number"
          placeholder={`${symbol}...`}
          className={`converter-input ${converter ? "cv-inp-active" : ""}`}
          onChange={(e) => {
            setConverterResult(
              convertCurrency(e.target.value, price, priceUSD)
            );
          }}
        />
        <p className={`bg-text value ${converter ? "cv-active" : ""}`}>
          <b className="value-converted">{`$${
            converterResult > 999
              ? numberWithCommas(converterResult.toFixed(3))
              : converterResult.toFixed(5)
          }`}</b>
          <b className="bg-text__currency inp-res">ARS</b>
        </p>
        <IoCloseOutline
          stroke="#171A1F"
          className={`bg-close ${converter ? "cv-active" : "cv-hide"} `}
          onClick={() => setConverter(false)}
        />
      </section>
    </section>
  );
};
export default CryptoCard;
