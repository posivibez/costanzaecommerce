import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions.js'

import CustomButton from '../button-custom/buttoncustom.component'

import CartItem from '../cart-item/cart-item.component'


import './cart-dropdown.styles.scss'

const Cart = () => {
    const hidden = useSelector(selectCartHidden);
    const items = useSelector(selectCartItems); 

    const dispatch = useDispatch();

    const history = useHistory();
    
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

export default Cart;