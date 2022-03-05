import {HIDE_MODAL_SIGN_IN, HIDE_MODAL_SIGN_UP, SHOW_MODAL_SIGN_IN, SHOW_MODAL_SIGN_UP} from "../actions/showModalAction";

const initialState = {
    signIn: false,
    signUp: true
}

export const showModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_SIGN_IN:
            return { ...state, signIn: true }
        case HIDE_MODAL_SIGN_IN:
            return { ...state, signIn: false }
        case SHOW_MODAL_SIGN_UP:
            return { ...state, signUp: true }
        case HIDE_MODAL_SIGN_UP:
            return { ...state, signUp: false }
        default:
            return state;
    }
}
