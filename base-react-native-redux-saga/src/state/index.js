// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from './Sagas'

export default () => {
    const rootReducer = combineReducers({
        loginData: require('./login/Reducer').reducer,
    })

    return configureStore(rootReducer, rootSaga)
}
