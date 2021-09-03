import React from "react";
import './navbar.css';
import Button from './shoppingcart-btn/cartButton';

const Navbar = () => {

    const getCart = () => {
        alert('VARUKORGEN ÖPPNAS')
    }

    return (
        <nav className= "navbar">
            <Button onClick={getCart}></Button>
        </nav>  
    );
}

export default Navbar;