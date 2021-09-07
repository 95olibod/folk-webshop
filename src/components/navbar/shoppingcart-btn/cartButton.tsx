import React, {CSSProperties} from "react";
import './cartButton.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

const CartButton = () => {

    return (
        <button className= "cart-btn" >
            <Link to="/checkout" style={noLinkStyle}>
            <ShoppingCartIcon className= "shoppingcart" fontSize="small" ></ShoppingCartIcon>
            </Link>
        </button>
        
    );
}

const noLinkStyle: CSSProperties = {
    textDecoration: 'none'
}

export default CartButton;