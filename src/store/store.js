import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/CartSlicer.js"
export const store = configureStore({
  reducer: {
    cartItems: cartReducer
  },
})