/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import counter from '../features/counter/counterSlice';
import token  from '../features/token/tokenSlice';
import user from '../features/user/usersSlice';
import version from '../features/version/versionSlice';
import stocks from '../features/stock/slice';
import products from '../features/product/slice';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const rootReducer = combineReducers({
    couter: counter,
    token: token,
    user: user,
    version:version,
    stocks:stocks,
    products:products
  });
  export const userData = (state:RootState) => state.user;
  export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

