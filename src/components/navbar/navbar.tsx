import React from "react";
import HomeLogoButton from "./homeLogoButton";
import "./navbar.css";
import CartButton from "./shoppingcart-btn/cartButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HomeLogoButton /> 
      <CartButton />
    </nav>
  );
};

export default Navbar;
