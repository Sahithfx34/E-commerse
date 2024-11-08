import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/CartSlicer.js"
import searchReducer from "../features/search/SearchSlicer.js"
export const store = configureStore({
  reducer: {
    cartItems: cartReducer,
    ToggleSearch: searchReducer

  },
})