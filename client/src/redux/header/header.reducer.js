// import { CartActionTypes } from "./cart.types";
import { HeaderActionTypes } from './header.types'

const INITIAL_STATE = {
    mobileMenuHidden: true,
}

const headerReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case HeaderActionTypes.TOGGLE_MOBILE_MENU:
            return {
                ...state,
                mobileMenuHidden: !state.mobileMenuHidden
            }
        default:
            return state;
    }
}

export default headerReducer;