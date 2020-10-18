import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../features/test/testSlice'
import tokenReducer from '../features/token/tokenSlice'

export default configureStore({
  reducer: {
    test: testReducer,
    token:tokenReducer
  }
})