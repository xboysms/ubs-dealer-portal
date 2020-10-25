import Axios from 'axios'
import { Action } from 'redux';
import {call,takeEvery,put} from 'redux-saga/effects'
import { 
    GET_AVAILABLE_VERSION_LIST
} from './actions'
import {finish,loadFailed} from './versionSlice'

const baseUrl="https://dealerportaldemo.azurewebsites.net/api/";
function* watchGetItems() {
    yield takeEvery(GET_AVAILABLE_VERSION_LIST, getAvalableVersions)
}
export default watchGetItems;
// worker saga
function* getAvalableVersions() {
    try {
        const items = yield call(getDataAsync)
        yield put(finish(items.data));
    } 
    catch(error){
        yield put(loadFailed())
    }
}


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMDAxIiwidXNlck5hbWUiOiJhZG1pbiIsIm5iZiI6MTYwMzU0MTYwNCwiZXhwIjoxNjAzNTcwNDA0LCJpYXQiOjE2MDM1NDE2MDR9.uDlU2wSjXbzcTLpCa-qZhq2qy3e-ANYIhRpEwzizG40";
function getDataAsync(){
    return Axios({
        method:"GET",
        headers: {
            'Authorization': 'Bearer ' +token
          },
        url: baseUrl+"versions"
    });
}
// function loginAsync(){
//     return Axios({
//         method:"POST",
//         url: baseUrl+"users",
//         data:
//     });
// }


