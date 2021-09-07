import React from "react";
import './navbar.css';
import CartButton from './shoppingcart-btn/cartButton';


const Navbar = () => {

    return (
        <nav className= "navbar">
             <CartButton/>
        </nav>  
    );
}

export default Navbar;