import { combineReducers } from 'redux'
import { productListReducer, productDetailsReducer } from './productReducer'
import { cartReducer } from './cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from "./userReducer";

export const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer
})