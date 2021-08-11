import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

// let cartVisibility = this.props.hidden;

// const handleClick = () => {
//     // cartVisibility = !cartVisibility;
//     console.log(state);
//     // this.props.toggleHidden(cartVisibility)
// };

const CartIcon = ({ toggleCart }) => {

  return (
    <div
      className="cart__icon"
      onClick={toggleCart}
    >
      <ShoppingIcon className="shopping__icon" />
      <span className="item__count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
