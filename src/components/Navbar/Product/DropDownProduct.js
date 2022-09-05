import React, { useState } from "react";
import { ProductDropDown } from "./ProductDropDown";
import './DropDownProduct.css'



const DropDownProduct = () => {
    const [dropDownProduct, setDropDownProduct] = useState(false);



    return (
        <ul className= {dropDownProduct ? "product-submenu-clicked" : "product-submenu"}
        onClick={() => setDropDownProduct(!dropDownProduct)}>
            {ProductDropDown.map((item, index) => {
                return (
                <li key={index}>
                    <a className={item.cName} href={item.url}>
                        {item.title}<br></br>
                        <div className="product-submenu-teks">
                        {item.teks}
                        </div>
                    </a>
                </li>
                )
            })}
        </ul>
    )
}


export default DropDownProduct;