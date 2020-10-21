import { call, put,takeEvery } from 'redux-saga/effects'

function* fetchData(action) {
   try {
      const data = yield call(Api.fetchUser, action.payload.url)
      yield put({type: "FETCH_SUCCEEDED", data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

export function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
}