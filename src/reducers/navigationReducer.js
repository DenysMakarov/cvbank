import {COMPANY_NAV, SHOW_SIGN_IN, SHOW_SIGN_UP, USER_NAV} from "../actions/navigationReducerAction";


export const initialState = {
    navigationUser: true,
    signInUp: true
}

export const navigationReducer = (state = initialState, action) => {
    switch (action.type){
        case USER_NAV: return {...state, navigationUser: true}
        case COMPANY_NAV: return {...state, navigationUser: false}
        case SHOW_SIGN_IN: return {...state, signInUp: false}
        case SHOW_SIGN_UP: return {...state, signInUp: true}
        default: return state
    }
}