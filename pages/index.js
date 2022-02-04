import Head from "next/head";
import Image from "next/image";
import React from "react";
import Main from "../components/main";
import Navbar from "../components/Navbar/navbar";
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>CryptoPrices</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </React.Fragment>
  );
}
