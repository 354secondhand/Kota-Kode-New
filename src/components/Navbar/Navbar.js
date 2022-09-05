import React, { useState } from "react";
import Logo from '../Images/Logo.png'
import './Navbar.css'
import { MenuItem } from "./MenuItems";
import { Button } from "./Button/Button";
import DropDownProduct from "./Product/DropDownProduct";


const Navbar = () => {
    const [dropDownProduct, setDropDownProduct] = useState(false);


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
                            if(item.title==='Produk') {
                                return (
                                    <li key={index}  
                                    onMouseLeave={() =>setDropDownProduct(false)}
                                    onMouseEnter={() =>setDropDownProduct(true)}>
                                    
                                        <a className={item.cName} href={item.url} 
                                        >{item.title}
                                        </a>
                                    {dropDownProduct&&<DropDownProduct />}
                                    </li>
                                )
                            }
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>{item.title}
                                    </a>
                                </li>
                                
                            )
                        })}
                    </ul>

                </nav>
                
                <div className="button">
                    <Button>Masuk</Button>
                    <Button
                    buttonStyle='btn--signup'
                    >Daftar</Button>
                </div>
                

            </header>
    )
}   


export default Navbar;