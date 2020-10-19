import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId:0,
    userName:'temp',
    token:'temporarily'
  },
  reducers: {
    login: (state,action) => {
      console.log(action.payload);
      state.userName = action.payload.username;
      state.token = action.payload.token;
      state.userId=1000;
    },
    logout: state => {
      state.userName = '';
      state.token = '';
      state.userId=0;
    }
  }
});

export const { login, logout} = userSlice.actions;
export const currentUser = state => state.user;
export default userSlice.reducer;