import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer.js";
import userReducer from './user/user.reducer.jsx';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})