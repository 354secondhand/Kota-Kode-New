import React from "react";
import Logo from '../Images/Logo.png'
import './Navbar.css'
import { MenuItem } from "./MenuItems";
import { Button } from "./Button";

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
                <div className="button">
                    <Button className="button-sign-in">Masuk</Button>
                    <Button
                    buttonStyle='btn--signup'
                    >Daftar</Button>
                </div>
            </header>
    )
}   


export default Nav;