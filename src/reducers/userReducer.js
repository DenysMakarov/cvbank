import {ADD_USER, REMOVE_USER} from "../actions/userAction";

const initiallyState = {
    userDetails: {

    }
}

export const userReducer = (state = initiallyState, action) => {
        switch (action.type){
            case ADD_USER: return {userDetails: Object.assign({}, action.payload)}
            case REMOVE_USER: return {userDetails: {}}
            default: return state
        }
}