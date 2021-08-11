import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart-dropdown/cart-dropwdown.component'

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="header__left">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="header__right">
      <Link to="/shop" className="header__link">
        SHOP
      </Link>
      <Link to="/contact" className="header__link">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="header__link" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="header__link" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    <Cart />
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
