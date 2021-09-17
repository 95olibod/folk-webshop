import Header from "../header/header";
import Navbar from "../navbar/navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homePage";
import ConfirmationPage from "../../pages/confirmationPage";
import DetailsPage from "../../pages/detailsPage";
import CheckoutPage from "../../pages/checkOutPage";
import NotFoundPage from "../../pages/notFoundPage";
import AdminPage from "../../pages/adminPage"
import EditPage from "../../pages/editPage"

function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/confirmation" component={ConfirmationPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default Layout;
