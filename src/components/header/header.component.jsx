import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { HeaderContainer, LinkContainer } from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropwdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

const Header = ({ currentUser }) => (
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
        <LinkContainer onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps)(Header);
