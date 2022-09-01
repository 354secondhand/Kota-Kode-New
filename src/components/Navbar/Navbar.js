import React from "react";
import Logo from '../Images/Logo.png'
import './Navbar.css'
import { MenuItem } from "./MenuItems";

const Nav = () => {
    return (
            <header>
            <div className="brand">
                <a href="eaea.com">
                <img src={Logo} alt='Kota Kode' className="logo"/>
                </a>
            </div>
            <nav>
                <ul className="nav-menu">
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </header>
    )
}   


export default Nav;