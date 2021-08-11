import React from 'react'
import { connect } from "react-redux";

import CustomButton from '../button-custom/buttoncustom.component'


import './cart-dropdown.styles.scss'

const Cart = ({ hidden }) => {
 
    return (
    <div className={`cart__dropdown ${hidden ? 'cart__dropdown__hidden' : 'cart__dropdown__show'}`}>
        <div className="cart__items">         
        </div>
        <div className="cart__dropdown__button">
            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>

        </div>
    </div>
)
};

const mapStateToProps = ({ cart: { hidden }}) => ({
    hidden: hidden,
  });

export default connect(mapStateToProps)(Cart);