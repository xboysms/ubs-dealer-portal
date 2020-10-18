import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: ''
  },
  reducers: {
    generate: state => {
      state.value = 'generated token';
    },
    clear: state => {
      state.value ='';
    },
    setToken: (state,action) => {
        state.value=action.payload;
    }
  }
})

export const { generate, clear ,setToken} = tokenSlice.actions

export default tokenSlice.reducer