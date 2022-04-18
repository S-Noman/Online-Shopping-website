import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import {userReducer} from './userReducer'
import {cartReducer} from './cartReducer'

export const allReducers = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})