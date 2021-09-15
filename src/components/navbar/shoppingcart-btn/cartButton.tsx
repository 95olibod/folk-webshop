import "./cartButton.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

//Component for cart button and cart icon in navbar
const CartButton = () => {
  return (
    <button className="cart-btn">
      <Link to="/checkout" className="link">
        <ShoppingCartIcon
          className="shoppingcart"
          fontSize="medium"
        ></ShoppingCartIcon>
      </Link>
    </button>
  );
};

export default CartButton;
