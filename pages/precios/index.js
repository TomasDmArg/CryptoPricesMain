import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar/navbar.js";
import CardContainer from "../../components/Cards/card";
import { Title, Text, Input } from "../../utils/utils";
import { IoGridOutline, IoListOutline } from "react-icons/io5";
import { getLS, saveLS } from "../../LocalStorage/localstorage";
import { GlobalProvider } from "../../context/index";
const Main = () => {
  const [gridType, setGridType] = React.useState("grid");
  React.useEffect(() => {
    if (getLS("grid_type") != null && getLS("grid_type") == "grid") {
      setGridType("grid");
    } else if (getLS("grid_type") != null && getLS("grid_type") == "list") {
      setGridType("list");
    }
  }, []);
  const setGrid = (val) => {
    setGridType(val);
    saveLS(val, "grid_type");
  };
  return (
    <GlobalProvider>
      <Head>
        <title>CryptoPrices - Precios</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar />
      <Title addCl="top-title">Top 100 criptomonedas por marketcap</Title>
      <Text addCl="top-text">Fuente: Coingecko, Dolar: DolarSi...</Text>
      <Input type="search" addCl="" required="false" />
      <Text addCl="mode">
        Modo:
        <IoListOutline
          stroke={gridType == "list" ? "#06D6A0" : "#eee"}
          className="mode__button"
          onClick={() => {
            setGrid("list");
          }}
          set={setGrid}
        />
        <IoGridOutline
          stroke={gridType == "list" ? "#eee" : "#06D6A0"}
          className="mode__button"
          onClick={() => {
            setGrid("grid");
          }}
        />
      </Text>

      <CardContainer grid={gridType} />
    </GlobalProvider>
  );
};
export default Main;
