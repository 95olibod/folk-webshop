import Header from "../header/header";
import Navbar from "../navbar/navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homepage";
import ConfirmationPage from "../../pages/confirmationPage";
import DetailsPage from "../../pages/detailsPage";
import CheckoutPage from "../../pages/checkOutPage";

function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/confirm" component={ConfirmationPage} />
      </Switch>
    </div>
  );
}

export default Layout;
