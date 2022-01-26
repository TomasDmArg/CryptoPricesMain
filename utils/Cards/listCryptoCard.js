import React from 'react';
import { numberWithCommas } from './cryptoCard';
import { useRouter } from 'next/router';
const ListCryptoCard = ({
    name,
    symbol,
    price,
    change,
    image,
    id,
    rank,
    usdPrice,
    marketcap,
    supply,
    total,
})=>{
    const router = useRouter();
    let bigText = name.length > 12 ? true : false;
    let positive = (change > 0) ? true : false;
    return (
        <section className={`card-container-list`} onClick={()=> router.push(`/precios/${id}`)}>
            <section className="card-container-list__container">
                    <h4 className="container__rank">{rank}</h4>
                    <section className="card__name-container">
                        <section className="container__image">
                            <img src={image} className="container__image--img" alt=""/>
                        </section>
                        <h2 className={`card__name-container--title  ${(bigText) ? "t-big" : ""}`}>{name}</h2>
                        <h4 className="text container__symbol">{symbol}</h4>
                    </section>
                    <h3 className={`container__price price ${(positive) ? "up" : "down"}`}>${numberWithCommas(price)}USD</h3>
                    <p className="hidden-value">{price}</p>
                    <h4 className="container__price-ars">${numberWithCommas((parseFloat(price)*parseFloat(usdPrice)).toFixed(2))}ARS</h4>
                    <h4 className={`container__percent percent ${(positive) ? "up" : "down"}`}>{change.toFixed(2)}%</h4>
                    <h4 className="container__marketcap">{numberWithCommas(marketcap)}</h4>
                    <section className="container__supply">
                        <h4 className="container__supply--circ">{numberWithCommas(supply) + symbol + " /"}</h4>
                        <h4 className="container__supply--total">{(total != null) ? numberWithCommas(total) + symbol : "sin límite"}</h4>
                    </section>
            </section>
        </section>
    )
}
export default ListCryptoCard;