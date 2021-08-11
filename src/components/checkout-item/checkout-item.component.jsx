import React from 'react'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => {
    return(
        <div className="checkout__item">
            <div className="img__container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">${price}</span>
            <div className="remove">&#10005;</div>
        </div>
    )
}

export default CheckoutItem;