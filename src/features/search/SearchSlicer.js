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
    }
    
  },
})


export const {Toggle} = searchSlicer.actions

export default searchSlicer.reducer