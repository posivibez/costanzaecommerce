import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { toggleCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js'

import "./cart-icon.styles.scss";

// let cartVisibility = this.props.hidden;

// const handleClick = () => {
//     // cartVisibility = !cartVisibility;
//     console.log(state);
//     // this.props.toggleHidden(cartVisibility)
// };

const CartIcon = ({ itemCount, toggleCart }) => {

  return (
    <div
      className="cart__icon"
      onClick={toggleCart}
    >
      <ShoppingIcon className="shopping__icon" />
      <span className="item__count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
