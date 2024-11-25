import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state,action) => {
      const exist = state.value.find((item)=> item._id === action.payload._id && item.size === action.payload.size);
      if(exist){
        exist.quantity +=1;
      }else{
        state.value.push({...action.payload,quantity:1})
      }
    },
    removeItem: (state,action) => {
      state.value = state.value.filter((item) => item._id !== action.payload._id || item.size !== action.payload.size);
    },
    updateQuantity:(state,action)=>{
      const {id,size,quantity} = action.payload;
      const update = state.value.find((item)=>item._id === id && item.size === size)
      update.quantity = quantity;
    },
    clearCart:(state)=>{
      state.value = [];
    }
  },
})


export const { addItem, removeItem,updateQuantity,clearCart} = cartSlice.actions

export default cartSlice.reducer