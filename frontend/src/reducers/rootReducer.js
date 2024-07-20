import { combineReducers } from 'redux'
import { productListReducer, productDetailsReducer } from './productReducer'
import { cartReducer } from './cartReducers'
import { userLoginReducer } from "./userReducer";

export const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer
})