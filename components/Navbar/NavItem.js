import React from 'react';
import Link from 'next/link';
const NavItem = ({text})=>{
    return (
        <li id={text.toLowerCase()}>
            <Link href={`/${(text.toLowerCase() == 'home') ? '/' : text.toLowerCase()}`}>
                <a className="nav__container--item">{text}</a>
            </Link>
        </li>
    )
}
export default NavItem;