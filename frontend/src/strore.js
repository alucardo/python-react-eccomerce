// import { combineReducers } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'
//
// const rootReducer = combineReducers({})
//
// const composedEnhancer = applyMiddleware(thunk)
//
// const store = createStore(rootReducer, composedEnhancer)
// export default store

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { productListReducer } from './reducers/productReducer'
const rootReducer = combineReducers({
  productList: productListReducer,
})

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       thunk: {}
//     })
// })

const store = configureStore({
  reducer: rootReducer
})

export default store