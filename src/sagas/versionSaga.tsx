import Axios from 'axios'
import {call,takeEvery,put} from 'redux-saga/effects'
import { 
    GET_AVAILABLE_VERSION_LIST
} from '../actions/actionsConst'
import {finish,loadFailed} from '../reducers/versionSlice'

export function* watchGetItems() {
    yield takeEvery(GET_AVAILABLE_VERSION_LIST, getItems)
}


// worker saga
function* getItems() {
    try {
        const items = yield call(getDataAsync)
        yield put(finish(items.data.AvailableVersions));
    } 
    catch(error){
        yield put(loadFailed())
    }
}

function getDataAsync(){
    return Axios({
        method:"GET",
        url:"http://ws.dev.ultimate.net.au:8011/"+
        "api/ProgramUpdate/?programName=payroll"+
        "&currentVersion=6.0&fileVersion=1.0.0.0"
    });
}

