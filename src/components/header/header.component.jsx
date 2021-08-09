import React from "react";
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils.js'

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="header__left">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="header__right">
      <Link to="/shop" className="header__link">SHOP</Link>
      <Link to="/contact" className="header__link">CONTACT</Link>
      {
        currentUser ?
        <div className="header__link" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
        : 
        <Link className="header__link" to='/signin'>
          SIGN IN
        </Link>
      }
    </div>
  </div>
);

export default Header;
