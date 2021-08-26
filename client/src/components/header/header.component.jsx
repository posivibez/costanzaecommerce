import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as LogoIcon } from "../../assets/crown.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/hamburger.svg";

import { HeaderContainer, LinkContainer } from "./header.styles";
import './header.styles.scss'

import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropwdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors.js";

import { signOutStart } from "../../redux/user/user.actions.js";

const Header = () => 
{
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
  <HeaderContainer main>
    <HeaderContainer left>
      <Link to="/">
        <LogoIcon className="logo" />
      </Link>
    </HeaderContainer>
    <HeaderContainer right>
      <LinkContainer to="/shop">SHOP</LinkContainer>
      <LinkContainer to="/contact">CONTACT</LinkContainer>
      {currentUser ? (
        <LinkContainer onClick={() => dispatch(signOutStart())}>SIGN OUT</LinkContainer>
      ) : (
        <LinkContainer to="/signin">SIGN IN</LinkContainer>
      )}
      <HamburgerIcon className="hamburger" />
      <CartIcon />
    </HeaderContainer>
    <Cart />
  </HeaderContainer>
)};

export default Header;
