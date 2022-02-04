import React from 'react';
import { useRouter } from "next/router";
import Skeleton from 'react-loading-skeleton';
const ListDollarCard = ({loading, buy, sell, change, spread})=>{
    const router = useRouter();
    return (
    <section className="dollar-info-main-list" onClick={() => router.push('/dolar')} >
        <section className="dollar-name-cont-main" >
            <div className="dollar-name-cont-2">
                <h2>Dolar Blue</h2>
                <h4 className="text dollar-source">Dolar Si</h4>
            </div>
            <h3 className="quote">
                Compra: &nbsp;
                <span className="buyDollar">
                    {(loading)? <Skeleton width={80} baseColor="#aaa"/> : `$${buy}`}
                </span>
            </h3>
            <h3 className="quote">
                Venta: &nbsp;
                <span className="sellDollar">
                    {(loading)? <Skeleton width={80} baseColor="#aaa"/> : `$${sell}`}
                </span>
            </h3>
            <h3 className="quote alt">
                Cambio 24hrs: &nbsp;
                {(loading)? <Skeleton width={80} baseColor="#aaa"/> : `${change}%`}
            </h3>
            <h3 className="quote alt">
                Spread: &nbsp;
                {(loading)? <Skeleton width={80} baseColor="#aaa"/> : `${spread}%`}
            </h3>
        </section>
    </section>);
}   
export default ListDollarCard;