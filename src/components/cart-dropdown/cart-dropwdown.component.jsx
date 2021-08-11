import React from 'react'
import { connect } from "react-redux";

import CustomButton from '../button-custom/buttoncustom.component'

import CartItem from '../cart-item/cart-item.component'


import './cart-dropdown.styles.scss'

const Cart = ({ hidden, items }) => {
 
    return (
    <div className={`cart__dropdown ${hidden ? 'cart__dropdown__hidden' : 'cart__dropdown__show'}`}>
        <div className="cart__items">   
            {
                items.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }      
        </div>
        <div className="cart__dropdown__button">
            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>

        </div>
    </div>
)
};

const mapStateToProps = ({ cart: { hidden, items }}) => ({
    hidden: hidden,
    items: items
  });

export default connect(mapStateToProps)(Cart);