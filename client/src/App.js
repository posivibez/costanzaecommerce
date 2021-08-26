import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selectors";

import { checkUserSession } from "./redux/user/user.actions";

import "./App.scss";

import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shop.component.jsx";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkoutpage/checkoutpage.component.jsx";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default withRouter(App);
