// import { CartActionTypes } from "./cart.types";
import { HeaderActionTypes } from './header.types'

const INITIAL_STATE = {
    hidden: true,
}

const headerReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case HeaderActionTypes.TOGGLE_MOBILE_MENU:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default headerReducer;