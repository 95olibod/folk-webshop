import HomeLogoButton from "./homeLogoButton";
import "./navbar.css";
import CartButton from "./shoppingcart-btn/cartButton";

//Component with logo and cart button
const Navbar = () => {
  return (
    <nav className="navbar">
      <HomeLogoButton /> 
      <CartButton />
    </nav>
  );
};

export default Navbar;
