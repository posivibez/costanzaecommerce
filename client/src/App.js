import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { checkUserSession } from "./redux/user/user.actions";

import "./App.scss";

import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shop.component.jsx";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from './pages/checkoutpage/checkoutpage.component.jsx';

class App extends React.Component {
  // unsubscribeFromAuth = null;

  componentDidMount() {

    const { checkUserSession } = this.props;
    checkUserSession();

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot((snapShot) => {
    //       this.props.setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   } else {
    //     this.props.setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() => 
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
