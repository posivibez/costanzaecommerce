import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="header__right">
      <Link to="/shop" className="header__link">SHOP</Link>
      <Link to="/contact" className="header__link">CONTACT</Link>
    </div>
  </div>
);

export default Header;
