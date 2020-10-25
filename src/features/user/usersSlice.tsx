import { createSlice } from '@reduxjs/toolkit'

const initialState={
  requesting: false,
  successful: false,
  messages: [] as any,
  user:{} as any,
  errors: [] as any,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loggingIn: state => {
      state.requesting = true;
      state.successful= false;
      state.messages= [{ body: 'Logging in...', time: new Date()}];
      state.errors= [];
    },
    loggedInSuccess: (state,action) => {
      state.errors= []
      state.messages= []
      state.requesting= false
      state.user=action.payload;
    },
    setUserToken: (state,action) => {
      state.user.Token=action.payload;
    },
    loggedInFailed: (state,action) => {
      state.errors= state.errors.concat(action.payload);
      state.messages= [];
      state.requesting= false;
      state.successful= false;
    },
    loggedOutSuccess: state => {
      state= initialState
    }
  }
});

export const { 
  loggingIn, loggedInSuccess, 
  loggedInFailed,loggedOutSuccess,
  setUserToken} = userSlice.actions;
export default userSlice.reducer;