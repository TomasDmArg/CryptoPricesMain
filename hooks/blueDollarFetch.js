import React, { useEffect, useContext } from "react";
import GlobalProvider from "../context/index";

const getBlueDollar = () => {
  let { setDollar } = React.useContext(GlobalProvider);
  useEffect(() => {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
      .then((response) => response.json())
      .then((data3) => {
        setDollar({
          loading: false,
          buy: data3[1].casa.venta,
          sell: data3[1].casa.compra,
          change: data3[1].casa.variacion,
          spread:
            ((parseInt(data3[1].casa.venta) - parseInt(data3[1].casa.compra)) /
              parseInt(data3[1].casa.venta)) *
            100,
        });
      });
  }, []);
};

export default getBlueDollar;
