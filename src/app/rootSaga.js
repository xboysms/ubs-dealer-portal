import Axios from 'axios';
import { put, takeEvery, all, delay,takeLatest,call } from 'redux-saga/effects';  
import { INCREMENT, DECREMENT, INCREMENT_ASYNC,DECREMENT_ASYNC } from './reducer';

// function* incrementAsync() {  
//    yield put({ type: INCREMENT });  
//    yield delay(1000);  
//    yield put({ type: DECREMENT });  
//    yield delay(1000);  
//    yield put({ type: INCREMENT });  
//    yield delay(1000);  
//    yield put({ type: DECREMENT });  
// }
function* incrementAsync() {  
    yield delay(1000);  
   yield put({ type: INCREMENT });  
}
function* decrementAsync() {  
    yield delay(1000);  
   yield put({ type: DECREMENT });  
}


function* watchAsync() {  
   yield takeEvery(INCREMENT_ASYNC, incrementAsync);  
   yield takeEvery(DECREMENT_ASYNC, decrementAsync); 
   yield takeLatest("API_CALL_REQUEST", workerSaga); 
}

export function* rootSagas() {  
   yield all([watchAsync()]);  
//    console.log('run here');
//    yield takeLatest("API_CALL_REQUEST", workerSaga); 
} 

function getDataAsync(){
    return Axios({method:"GET",url:"http://ws.dev.ultimate.net.au:8011/api/ProgramUpdate/?programName=payroll&currentVersion=6.0&fileVersion=6.0.0.0"})

}
function* workerSaga() {
    try {
      const response = yield call(getDataAsync);
      console.log(response);
      //const data = response.data;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: "API_CALL_SUCCESS", response });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error });
    }
  }