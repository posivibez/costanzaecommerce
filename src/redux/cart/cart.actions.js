import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const reduceItem = item => ({
    type: CartActionTypes.REDUCE_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});