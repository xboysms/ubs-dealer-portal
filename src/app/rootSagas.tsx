import versionSaga from '../features/version/versionSaga'
import userSaga from '../features/user/userSaga'
export default function* rootSagas () {  
    yield [
        versionSaga(),
        userSaga()
    ]
  }