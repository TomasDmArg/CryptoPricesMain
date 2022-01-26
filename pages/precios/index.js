import React from "react";
import Head from 'next/head'
import Navbar from '../../utils/Navbar/navbar'
import CardContainer from '../../utils/Cards/card.js';
import {Title, Text, Input} from "../../utils/utils";
import { IoGridOutline, IoListOutline } from "react-icons/io5";

const Main = ()=>{
    const [gridType, setGridType] = React.useState("grid");
    return (
        <React.Fragment>
            <Head>
                <title>CryptoPrices - Precios</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <Navbar/>
            <Title addCl="top-title">Top 100 criptomonedas por marketcap</Title>
            <Text addCl="top-text">Fuente: Coingecko, Dolar: DolarSi...</Text>
            <Input type="search" addCl="" required="false"/>
            <Text addCl="mode">Modo: 
                <IoListOutline stroke={(gridType == "list") ? "#06D6A0" : "#eee"} className="mode__button" onClick={() => setGridType("list")}/>
                <IoGridOutline stroke={(gridType == "list") ? "#eee" : "#06D6A0"} className="mode__button" onClick={() => setGridType("grid")}/>
            </Text>
            
            <CardContainer grid={gridType}/>
        </React.Fragment>
    )
}
export default Main;