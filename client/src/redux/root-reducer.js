import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer.js";
import userReducer from "./user/user.reducer.jsx";
import directoryReducer from "./directory/directory.reducer.js";
import shopReducer from "./shop/shop.reducer.js";
import headerReducer from "./header/header.reducer.js";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    header: headerReducer
  });

export default persistReducer(persistConfig, rootReducer);
