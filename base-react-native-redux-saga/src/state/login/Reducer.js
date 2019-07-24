import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../ActionTypes'
import Immutable from 'seamless-immutable'
import {createReducer} from '../CreateReducer'

const INITIAL_STATE = Immutable({
    loginData: null,
    isFetching: false,
    error: null,
})

const reducers = {
    [LOGIN]: (state, action) => {
        return Immutable.merge(state, { loginData: null, isFetching: true })
    },
    [LOGIN_SUCCESS]: (state, { data }) => {
        return Immutable.merge(state, { loginData: data, isFetching: false, error: null })
    },
    [LOGIN_ERROR]: (state, { error }) => {
        return Immutable.merge(state, { error, isFetching: false })
    },
}

export const reducer = createReducer(INITIAL_STATE, reducers)
