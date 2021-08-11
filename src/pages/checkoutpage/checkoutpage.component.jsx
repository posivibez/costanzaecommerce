import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import "./checkoutpage.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout__page">
    <div className="checkout__header">
      <div className="header__block">
        <span className="product">Product</span>
      </div>
      <div className="header__block">
        <span className="description">Description</span>
      </div>
      <div className="header__block">
        <span className="quantity">Quantity</span>
      </div>
      <div className="header__block">
        <span className="price">Price</span>
      </div>
      <div className="header__block">
        <span className="remove">Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
    <div className="total">
        <span className="total">
            TOTAL: ${total}
        </span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
