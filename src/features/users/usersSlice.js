import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userId:0,
    userName:'',
    token:''
  },
  reducers: {
    login: (state,action) => {
      state.userId = action.payload.userId;
    },
    logout: state => {
      state ={};
    }
  }
})

export const { login, logout} = usersSlice.actions
export const currentUser = state => state.users;

export default usersSlice.reducer