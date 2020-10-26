

import Axios from 'axios'
import {call,takeEvery,put} from 'redux-saga/effects'
import {getDataError,getDataFinished,gettingData} from './slice'
import {GET_ALL_STOCKS} from './constants'
import {BASE_URL} from '../../app/constants'

function* watcher() {
    yield takeEvery(GET_ALL_STOCKS, getAllStocks)
}
export default watcher;

// worker saga
function* getAllStocks() {
    
    try {
        yield put(gettingData());
        const response = yield call(getDataAsync)
        yield put(getDataFinished(response.data));
    } 
    catch(error){
        yield put(getDataError('Server error: Cannot get data'))
    }
}


function getDataAsync(){
    const token = localStorage.getItem("token");
    return Axios({
        method:"GET",
        headers: {
            'Authorization': `Bearer ${token}` 
          },
        url: BASE_URL+"stocks"
    });
}