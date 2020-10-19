import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../features/token/tokenSlice'
import userReducer from '../features/user/usersSlice'

export default configureStore({
  reducer:{
    token:tokenReducer,
    user:userReducer
  }
});