

import Axios from 'axios'
import {call,takeEvery,put} from 'redux-saga/effects'
import {loggingIn,loggedInSuccess,loggedInFailed} from './usersSlice'
import {LOGIN_REQUESTING} from './constants'

const baseUrl="https://dealerportaldemo.azurewebsites.net/api/";


function* watchGetItems() {
    yield takeEvery(LOGIN_REQUESTING, performLogin)
}
export default watchGetItems;
// worker saga
function* performLogin() {
    try {
        yield put(loggingIn());
        const items = yield call(getDataAsync)
        yield put(loggedInSuccess(items.data));
    } 
    catch(error){
        yield put(loggedInFailed(error))
    }
}


function getDataAsync(){
    return Axios({
        method:"POST",
        data:{
            username:"admin",
            password:"password"
        },
        url: baseUrl+"users"
    });
}