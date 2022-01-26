import React from 'react';
export const numberWithCommas = (x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const CryptoCard = ({
    name,
    symbol,
    price,
    change,
    image,
    id
})=>{
    let bigText = name.length > 12 ? true : false;
    let positive = (change > 0) ? true : false;
    return (
        <section className={`card-container ${(positive) ? "b-up" : "b-down"}`}>
            <section>
                    <section className="card__name-container">
                        <h2 className={`card__name-container--title ${(positive) ? "up" : "down"}  ${(bigText) ? "t-big" : ""}`}>{name}</h2>
                        <h4 className="text">{symbol}</h4>
                    </section>
                    <h3 className="price ">${numberWithCommas(price)}</h3>
                    <p className="hidden-value">{price}</p>
                    <h4 className={`percent ${(positive) ? "up" : "down"}`}>{change.toFixed(2)}%</h4>
                    <section className="card-image">
                        <img src={image} className="card-image-img" alt=""/>
                    </section>
                    <section className="buttons">
                        <a className={`card-button active seemorebtn ${(positive) ? "" : "btn-down"}`}>Ver mas</a>
                        <a className="card-button-2  convert text">Convertir</a>
                    </section>
                    <div className="bg"></div>
                    <h2 className="bg-text title">Convertir Bitcoin a <span className="currencyLabel">ARS</span></h2>
                    <input type="number" placeholder="BTC..." className="converter-input"/>    
                    <p className="bg-text value"><b className="value-converted">0</b><b className="converter-curency">ARS</b></p>
                    <img src="/assets/close.svg" alt="" className="bg-close"/>
            </section>
        </section>
    )
}
export default CryptoCard;