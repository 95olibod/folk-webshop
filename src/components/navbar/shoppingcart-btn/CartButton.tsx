import React, {FC, MouseEventHandler, CSSProperties} from "react";
import './cartButton.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const CartButton: FC<Props> = ({ onClick }) => {

    return (

        <button className= "cart-btn" onClick={onClick}>
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