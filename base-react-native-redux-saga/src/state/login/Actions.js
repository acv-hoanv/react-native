import * as ActionTypes from '../ActionTypes'

export const loginData = payloadData => ({
    type: ActionTypes.LOGIN,
    payload: payloadData,
})

export const loginSuccess = data => ({
    type: ActionTypes.LOGIN_SUCCESS,
    data
})

export const loginError = error => ({
    type: ActionTypes.LOGIN_ERROR,
    error
})
