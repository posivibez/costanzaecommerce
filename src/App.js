import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shop.component.jsx";
import HatsPage from "./pages/hatspage/hatspage.component.jsx";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          });
        })
      } else {
        this.setState({ currentUser: userAuth });
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header
          currentUser = {this.state.currentUser}
        >
        </Header>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={ShopPage} />
            <Route path="/shop/hats" exact component={HatsPage} />
            <Route path="/signin" exact component={SignInSignUpPage} />
          </Switch>
      </div>
    );

  }
}

export default App;
