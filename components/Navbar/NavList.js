import React from "react";
import NavItem from "./NavItem";
const navButtons = ["Home", "Precios", "Negocios", "Contacto"];
import { navbarContext } from "../../context/index";
const NavList = ({ active }) => {
  const { responsive, setResponsive } = React.useContext(navbarContext);
  return (
    <ul
      className={`nav__container ${responsive ? "n-active" : ""}`}
      id="nav__container"
    >
      {navButtons.map((button, index) => {
        return <NavItem key={index} text={button} />;
      })}
    </ul>
  );
};
export default NavList;
