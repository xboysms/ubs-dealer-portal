import Axios from 'axios'
import {call,takeEvery,put} from 'redux-saga/effects'
import { 
    GET_AVAILABLE_VERSION_LIST
} from './actions'
import {finish,loadFailed} from './versionSlice'
import {BASE_URL} from '../../app/constants'


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
        url: BASE_URL+"versions"
    });
}



