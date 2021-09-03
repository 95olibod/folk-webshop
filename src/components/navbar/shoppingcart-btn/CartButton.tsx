import React, {FC, MouseEventHandler} from "react";
import './cartButton.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const CartButton: FC<Props> = ({ onClick }) => {

    return (

        <button className= "cart-btn" onClick={onClick}>
            <ShoppingCartIcon className= "shoppingcart" fontSize="small" ></ShoppingCartIcon>
        </button>
        
    );
}

export default CartButton;