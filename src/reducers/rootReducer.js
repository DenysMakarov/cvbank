import {combineReducers} from "redux";
import {showModalReducer} from './showModalReducer'
import {userReducer} from "./userReducer";
import {navigationReducer} from "./navigationReducer";



export const rootReducer = combineReducers({
    showModalReducer,
    userReducer,
    navigationReducer
})

