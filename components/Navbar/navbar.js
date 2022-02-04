import React from "react";
import Logo from "./isologo";
import NavList from "./NavList";
import Hamburger from "../ResponsiveNavbar/hamb";
import { NavbarProvider, navbarContext } from "../../context";
const Navbar = () => {
  const { responsive, setResponsive } = React.useContext(navbarContext);
  return (
    <NavbarProvider>
      <header className="header">
        <nav className="header__nav">
          <Logo theme="dark" cl="header__nav--logo-container" />
          <NavList />
          <button className="header__nav--menu">
            <Hamburger />
          </button>
        </nav>
      </header>
    </NavbarProvider>
  );
};
export default Navbar;
