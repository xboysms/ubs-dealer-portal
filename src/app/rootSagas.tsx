import versionSaga from '../features/version/versionSaga'
import userSaga from '../features/user/userSaga'
import stockSaga from '../features/stock/saga'
import productsaga from '../features/product/saga'
import {all} from 'redux-saga/effects'
export default function* rootSagas () {  
    yield all ([
        versionSaga(),
        userSaga(),
        stockSaga(),
        productsaga()
    ])
  }