/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import counter from '../features/counter/counterSlice';
import token  from '../features/token/tokenSlice';
import versionReducer from './versionSlice'
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    couter: counter,
    token: token,
    version: versionReducer,
    ...injectedReducers,
  });

  return rootReducer;
}