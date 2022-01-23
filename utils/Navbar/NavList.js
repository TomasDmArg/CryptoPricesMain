import React from "react";
import NavItem from "./NavItem";
const navButtons = ["Home", "Precios", "Negocios", "Contacto"]; 
const NavList = ()=>{
    return (
        <ul className="nav__container" id="nav__container">
            {navButtons.map((button, index)=>{
                return <NavItem key={index} text={button}/>
            })}
        </ul>
    )
}
export default NavList;