
// import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { rootReducer } from "../reducers";


// // initialValues
// const init = {
//     currentUser: {}
// };

// // export function store(initialState = init) {
// //     const sagaMiddleware = createSagaMiddleware();
// //     const middleware = [sagaMiddleware];

// //     return {
// //         export const store = createStore(countReducer, applyMiddleware(sagaMiddleware));

// //     };
// // }
// const sagaMiddleware = createSagaMiddleware();
// export const store = createStore(countReducer, applyMiddleware(sagaMiddleware));


// function* exampleSaga() {
//     console.log("Example saga reached");
//   }
//   sagaMiddleware.run(exampleSaga);


// function* anGenerator() {  
//     yield 'one'  
//     return 'two';  
//  }
//  const value = anGenerator();  
//  console.log(value.next()); // {value: one, done: false}  
//  console.log(value.next()); // {value: two, done: true}  
//  console.log(value.next()); // {value: undefined, done: true}  

import { createStore, applyMiddleware } from 'redux';  
import createSagaMiddleware from 'redux-saga';
import {reducer} from './reducer'
import {rootSagas} from './rootSaga'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);