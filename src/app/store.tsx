// import { createStore, applyMiddleware,compose } from 'redux';  
// import createSagaMiddleware from 'redux-saga';
// import {reducer} from './reducer'
// import {rootSagas} from './rootSaga'

// const sagaMiddleware = createSagaMiddleware();
// // dev tools middleware
// /* eslint-disable no-underscore-dangle */
// const reduxDevTools =
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
// /* eslint-enable */

// export const store = createStore(
//     reducer, 
//     compose(applyMiddleware(sagaMiddleware),reduxDevTools)
// );
// sagaMiddleware.run(rootSagas);

import { createStore, applyMiddleware,compose } from 'redux';  
import createSagaMiddleware from 'redux-saga';
import rootSagas from './rootSagas'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware();
// dev tools middleware
/* eslint-disable no-underscore-dangle */
const reduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

export const store = createStore(
    rootReducer, 
    compose(applyMiddleware(sagaMiddleware),reduxDevTools)
);

sagaMiddleware.run(rootSagas);

//store.dispatch();//get first app settings