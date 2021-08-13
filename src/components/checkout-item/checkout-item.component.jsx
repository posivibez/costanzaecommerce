import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  removeItem,
  reduceItem,
} from "../../redux/cart/cart.actions.js";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, addItem, removeItem, reduceItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout__item">
      <div className="img__container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="checkout__arrow" onClick={() => reduceItem(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="checkout__arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  reduceItem: (cartItem) => dispatch(reduceItem(cartItem)),
  addItem: (cartItem) => dispatch(addItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
