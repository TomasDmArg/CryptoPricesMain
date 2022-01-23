import React from 'react';
import Logo from './isologo';
import NavList from './navlist';
const Navbar = ()=>{
    return (
        <header className="header">
            <nav className="header__nav">
                <Logo theme="dark" cl="header__nav--logo-container"/>
                <NavList/>
            </nav>
        </header>
    )
}
export default Navbar;