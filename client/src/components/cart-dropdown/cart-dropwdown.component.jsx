import React from 'react'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions.js'

import CustomButton from '../button-custom/buttoncustom.component'

import CartItem from '../cart-item/cart-item.component'


import './cart-dropdown.styles.scss'

const Cart = ({ hidden, items, history, dispatch }) => {
    return (
    <div className={`cart__dropdown ${hidden ? 'cart__dropdown__hidden' : 'cart__dropdown__show'}`}>
        <div className="cart__items">   
            {
                items.length
                ? (
                    items.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                )
                : (
                    <span className="empty__message">Your Cart is Empty</span>
                )
            }      
        </div>
        <div className="cart__dropdown__button">
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCart());
            }}>
                GO TO CHECKOUT
            </CustomButton>

        </div>
    </div>
)
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    items: selectCartItems
  });

export default withRouter(connect(mapStateToProps)(Cart));