import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./reducers/rootReducer";
import { initialState } from "./initialState";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
})

export default store