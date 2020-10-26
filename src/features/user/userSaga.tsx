

import Axios from 'axios'
import {call,takeEvery,put} from 'redux-saga/effects'
import {
    loggingIn,loggedInSuccess,
    loggedInFailed,loggedOutSuccess,
    setUserToken} from './usersSlice'
import {LOGIN_REQUESTING,LOGOUT_REQUESTING,USER_REFRESH_BY_TOKEN} from './constants'
import {BASE_URL} from '../../app/constants'

function* watchGetItems() {
    yield takeEvery(LOGIN_REQUESTING, performLogin)
    yield takeEvery(LOGOUT_REQUESTING, performLogout)
    yield takeEvery(USER_REFRESH_BY_TOKEN, performRefreshUser)
}
export default watchGetItems;

// worker saga
function* performLogin(payload:any) {
    
    try {
        const { username, password } = payload;
        yield put(loggingIn());
        const response = yield call(getDataAsync,username,password)
        yield put(loggedInSuccess(response.data));
        localStorage.setItem('token', JSON.stringify(response.data.Token))
    } 
    catch(error){
        yield put(loggedInFailed({message:"Invalid username/password"}))
    }
}

function* performLogout() {

    localStorage.clear();
    yield put(loggedOutSuccess());
}

function* performRefreshUser(payload:any) {
    try {
        const { token} = payload;
        yield put(setUserToken(token))
        const response = yield call(getUserAsync,token)
        const userRecord=  {...response.data, Token:token};
        yield put(loggedInSuccess(userRecord));
        //localStorage.setItem('token', JSON.stringify(response.data.Token))
    } 
    catch(error){
        yield put(loggedInFailed({message:"Failed to reload user"}))
    }
}

function getUserAsync(token:string){
    return Axios({
        method:"GET",
        headers: {
            'Authorization': `Bearer ${token}` 
          },
        url: BASE_URL+"users"
    });
}

function getDataAsync(username:string,password:string){
    return Axios({
        method:"POST",
        data:{
            username:username,
            password:password
        },
        url: BASE_URL+"users"
    });
}