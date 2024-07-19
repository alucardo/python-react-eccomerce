import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'


const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
})

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       thunk: {}
//     })
// })

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage
  }
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
})

export default store