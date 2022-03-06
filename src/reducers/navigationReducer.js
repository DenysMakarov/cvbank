import {COMPANY_NAV, USER_NAV} from "../actions/navigationReducerAction";


export const initialState = {
    navigationUser: true
}

export const navigationReducer = (state = initialState, action) => {
    switch (action.type){
        case USER_NAV: return {navigationUser: true}
        case COMPANY_NAV: return {navigationUser: false}
        default: return state
    }
}