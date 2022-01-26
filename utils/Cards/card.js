import React from "react";
import { useState, useEffect } from "react";
import Skeletons from "./skeletons";
import DollarCard from './dollarCard'
import CryptoCard from './cryptoCard';
import ListDollarCard from "./listDollarCard";
import ListCryptoCard from "./listCryptoCard";
import TableHead from "./tableHead";

const CardContainer = ({grid})=>{
    // Dollar card state
    const [dollar, setDollar] = useState({
        loading: true,
        buy: '',
        sell: '',
        change: '',
        spread: ''
    });
    const [loaded, setLoad] = useState(false)
    //Crypto card states
    const [cryptos, setCrypto] = useState([]);
    const addCrypto = (crypto) =>{
        res.push(crypto);
        if(res.lenght >= 100) setCrypto(res);
    }
    useEffect(()=>{
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(response => response.json())
            .then(data3 => {
                setDollar({
                    loading: false,
                    buy: data3[1].casa.venta,
                    sell: data3[1].casa.compra,
                    change: data3[1].casa.variacion,
                    spread: (parseInt(data3[1].casa.venta)-parseInt(data3[1].casa.compra))/parseInt(data3[1].casa.venta)*100,
                });
            });
    }, []);
    const [defOrder, setDefOrder] = useState([]);
    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd')
            .then(response => response.json())
            .then(data => {
            fetch('https://beta.belo.app/public/price')
                .then(response => response.json())
                .then(data2 => {
                    let res = [];
                    // Search pairCode "USDT/ARS" in data2 and return index
                    let index = data2.findIndex(item => item.pairCode == "USDT/ARS");
                    console.log(index)
                    for(let i = 0; i < 100; i++){
                        let symbol = data[i].symbol.toUpperCase();
                        let name = (data[i].name.split(" ").length > 2) ? symbol : data[i].name;
                        res.push({
                            name: name,
                            symbol: symbol,
                            price: data[i].current_price.toFixed(3),
                            change: data[i].price_change_percentage_24h,
                            image: data[i].image,
                            id: data[i].id,
                            rank: data[i].market_cap_rank,
                            usdPrice: parseFloat(data2[index].bid),
                            marketCap: data[i].market_cap,
                            circ: data[i].circulating_supply,
                            total: data[i].total_supply
                        })
                    }
                    setCrypto(res);
                    if(defOrder.length == 0){
                        setDefOrder(res);
                    }
                    setLoad(false);
                });
            });
    }, []);
    const [nameOrder, setNameOrder] = useState(0);
    return ( 
        <section className={(grid == "grid") ? "all-card-container" : "all-card-container-list"} id="content">
            {(grid == "grid") 
                ? <DollarCard  loading={dollar.loading} buy={dollar.buy} sell={dollar.sell}/>
                : <ListDollarCard loading={dollar.loading} buy={dollar.buy} sell={dollar.sell} change={dollar.change} spread={(dollar.spread).toFixed(2)}/>
            }
            {(grid == "list") 
                ?   <TableHead>
                        <h4 className="card-container__table-head--item" onClick={
                            ()=>{
                                console.log(defOrder)
                                let def = defOrder;
                                let res = [];
                                for(let i = 0; i < def.length; i++){
                                    res.push(def[def.length-1-i]);
                                }
                                setCrypto(res);
                            }
                        }>#</h4>
                        <h4 className="card-container__table-head--item" id="name" onClick={
                            ()=>{
                                if(nameOrder == 0){
                                    let res = cryptos;
                                    res.sort((a,b)=>{
                                        if(a.name > b.name) return 1;
                                        if(a.name < b.name) return -1;
                                        return 0;
                                    });
                                    setCrypto(res);
                                    setNameOrder(1);
                                }
                            }
                        }>Nombre</h4>
                        <h4 className="card-container__table-head--item" onClick={
                            ()=>{
                                if(nameOrder == 0){
                                    let res = cryptos;
                                    res.sort((a,b)=>{
                                        if(a.name > b.name) return 1;
                                        if(a.name < b.name) return -1;
                                        return 0;
                                    });
                                    setCrypto(res);
                                    setNameOrder(1);
                                }
                            }
                        }>Precio USD</h4>
                        <h4 className="card-container__table-head--item" onClick={
                            ()=>{
                                if(nameOrder == 0){
                                    let res = cryptos;
                                    res.sort((a,b)=>{
                                        if(a.name > b.name) return 1;
                                        if(a.name < b.name) return -1;
                                        return 0;
                                    });
                                    setCrypto(res);
                                    setNameOrder(1);
                                }
                            }
                        }>Precio ARS</h4>
                        <h4 className="card-container__table-head--item" onClick={
                            ()=>{
                                if(nameOrder == 0){
                                    let res = cryptos;
                                    res.sort((a,b)=>{
                                        if(a.name > b.name) return 1;
                                        if(a.name < b.name) return -1;
                                        return 0;
                                    });
                                    setCrypto(res);
                                    setNameOrder(1);
                                }
                            }
                        }>24hrs</h4>

                    </TableHead>
                : <></>
            }
            
            {(loaded) ? <Skeletons count={5}></Skeletons> : cryptos.map((crypto, index)=>{
                return (grid == "grid") 
                        ? <CryptoCard key={index} name={crypto.name} symbol={crypto.symbol} price={crypto.price} change={crypto.change} image={crypto.image} id={crypto.id}/>
                        : <ListCryptoCard key={index} name={crypto.name} symbol={crypto.symbol} price={crypto.price} change={crypto.change} image={crypto.image} id={crypto.id} rank={crypto.rank} usdPrice={crypto.usdPrice} marketcap={crypto.marketCap} supply={crypto.circ} total={crypto.total}/>
            })}
        </section>
    )
}
export default CardContainer;