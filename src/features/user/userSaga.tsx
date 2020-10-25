

import Axios from 'axios'
import {call,takeEvery,put} from 'redux-saga/effects'
import {loggingIn,loggedInSuccess,loggedInFailed} from './usersSlice'
import {LOGIN_REQUESTING} from './constants'
import { Action } from 'redux';

const baseUrl="https://dealerportaldemo.azurewebsites.net/api/";

function* watchGetItems() {
    yield takeEvery(LOGIN_REQUESTING, performLogin)
}
export default watchGetItems;

// worker saga
function* performLogin(payload:any) {
    try {

        const { username, password } = payload;
        yield put(loggingIn());
        const response = yield call(getDataAsync,username,password)
        yield put(loggedInSuccess(response.data));
    } 
    catch(error){
        yield put(loggedInFailed(error))
    }
}

function getDataAsync(username:string,password:string){
    return Axios({
        method:"POST",
        data:{
            username:username,
            password:password
        },
        url: baseUrl+"users"
    });
}