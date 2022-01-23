import React from "react";
import Head from 'next/head'
import Navbar from '../../utils/Navbar/navbar'

const Main = ()=>{
    return (
        <React.Fragment>
            <Head>
                <title>CryptoPrices - Contacto</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <Navbar/>
        </React.Fragment>
    )
}
export default Main;