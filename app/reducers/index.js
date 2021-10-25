import {combineReducers} from "redux"
import {cartReducer} from "./cartReducer"
import {userReducer} from "./userReducer"
import {categoryReducer} from "./categoryReducer"
import {productReducer} from "./productReducer"
import {wishListReducer} from "./wishListReducer"

export const reducers = combineReducers({
    cart:cartReducer,
    user:userReducer,
    categories:categoryReducer,
    products:productReducer,
    wishList:wishListReducer,
 })