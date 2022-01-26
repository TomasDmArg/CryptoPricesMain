import React from "react";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'


const DollarCard = ({loading, buy, sell})=>{
    return (
        <section className="dollar-info-main">
            <section className="dollar-info-main">
                <section className="dollar-name-cont-main">
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
                </section>
                    <Link href="/dolar">
                        <a className="dollar-button d-active d-seemorebtn" id="seemoredollar">Ver mas cotizaciones</a>
                    </Link>
            </section>
        </section>
    )
}
export default DollarCard;