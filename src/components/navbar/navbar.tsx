import HomeLogoButton from "./homeLogoButton";
import "./navbar.css";
import CartButton from "./shoppingcart-btn/cartButton";
import AdminButton from "./adminButton";

//Component with logo and cart button
const Navbar = () => {
    return (
        <nav className="navbar">
            <HomeLogoButton />
            <div className="button-group">
                <AdminButton />
                <CartButton />
            </div>
        </nav>
    );
};

export default Navbar;
