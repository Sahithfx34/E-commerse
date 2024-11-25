import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const searchSlicer = createSlice({
  name: 'ToggleSearch',
  initialState,
  reducers: {
    Toggle: (state) => {
      state.value =!state.value;
    },
    Cross:(state)=>{
      state.value = false;
    }
  },
})


export const {Toggle,Cross} = searchSlicer.actions

export default searchSlicer.reducer