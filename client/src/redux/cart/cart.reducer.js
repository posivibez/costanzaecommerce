import { CartActionTypes } from "./cart.types";

import { addItemToCart, removeItemFromCart, reduceItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                items: removeItemFromCart(state.items, action.payload)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                items: []
            }
        case CartActionTypes.REDUCE_ITEM:
            return {
                ...state,
                items: reduceItemFromCart(state.items, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;