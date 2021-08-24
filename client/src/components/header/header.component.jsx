import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { HeaderContainer, LinkContainer } from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropwdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

import { signOutStart } from "../../redux/user/user.actions.js";

const Header = ({ currentUser, signOutStart }) => (
  <HeaderContainer main>
    <HeaderContainer left>
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </HeaderContainer>
    <HeaderContainer right>
      <LinkContainer to="/shop">
        SHOP
      </LinkContainer>
      <LinkContainer to="/contact">
        CONTACT
      </LinkContainer>
      {currentUser ? (
        <LinkContainer onClick={signOutStart}>
          SIGN OUT
        </LinkContainer>
      ) : (
        <LinkContainer to="/signin">
          SIGN IN
        </LinkContainer>
      )}
      <CartIcon />
    </HeaderContainer>
    <Cart />
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
