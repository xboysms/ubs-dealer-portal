import Axios from 'axios'
import {call,takeEvery,put} from 'redux-saga/effects'
import { 
    GET_AVAILABLE_VERSION_LIST
} from './actions'
import {finish,loadFailed} from './versionSlice'

const baseUrl="https://dealerportaldemo.azurewebsites.net/api/";
//const baseUrl="http://dev.ultimate.net.au:60000/dealerportaldemo/api/";
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



function getDataAsync(){
    const token = localStorage.getItem("token");
    console.log(token);
    return Axios({
        method:"GET",
        headers: {
            'Authorization': `Bearer ${token}` 
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


