import { LOGIN } from '../ActionTypes'
import { put, takeLatest, call } from 'redux-saga/effects'
import API from '../../services/baseApi'
import * as LoginActions from './Actions'

function * loginData(action) {
    try {
        console.log('HOA ====>', 'Vao day')
        const response = yield call(API.post, '/api/v1/appSupport/registerDeviceTokens', {device_id: '31231', device_token: 'dasdasdasdasdasdasdasdasdasdasd', is_login: 0})
        yield put(LoginActions.loginSuccess(response))
    } catch (e) {
        yield put(LoginActions.loginError(e.message))
    }
}

export default function* root() {
    yield [yield takeLatest(LOGIN, loginData)]
}
