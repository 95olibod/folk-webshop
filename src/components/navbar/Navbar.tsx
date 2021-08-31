import React from "react";
import './Navbar.css';
import Button from './shoppingcart-btn/CartButton';

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