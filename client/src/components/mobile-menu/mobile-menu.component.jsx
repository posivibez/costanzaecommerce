import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { signOutStart } from "../../redux/user/user.actions.js";
import { toggleMobileMenu } from "../../redux/header/header.actions";

import { ReactComponent as CloseIcon } from "../../assets/close.svg";

import "./mobile-menu.styles.scss";

const MobileMenu = ({ hidden, currentUser }) => {
  const dispatch = useDispatch();

  useEffect(() => {

    if(!hidden) {
        console.log(hidden + "should be false");
        document.body.classList.add("mobileMenuBodyView");
    }

    if(hidden) {
        console.log(hidden + "should be true");
        document.body.classList.remove("mobileMenuBodyView");
    }
  }, [hidden]);

  return (
    <div
      className={`mobile__menu ${
        hidden ? "mobile__menu__hide" : "mobile__menu__show"
      }`}
    >
      <div className="mobile__menu__link__container">
        <CloseIcon
          className="mobile__menu__closeIcon"
          onClick={() => dispatch(toggleMobileMenu())}
        />
        <Link
          className="mobile__menu__link"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          SHOP
        </Link>
        <Link
          className="mobile__menu__link"
          to="/contact"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          CONTACT
        </Link>
        {currentUser ? (
          <Link
            className="mobile__menu__link"
            onClick={() => {
              dispatch(signOutStart());
              dispatch(toggleMobileMenu());
            }}
          >
            SIGN OUT
          </Link>
        ) : (
          <Link
            className="mobile__menu__link"
            onClick={() => dispatch(toggleMobileMenu())}
            to="/signin"
          >
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
