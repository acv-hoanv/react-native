// @flow
import axios from 'axios'
import {Constants} from "../common";
import url from 'url'

async function baseAxios(options) {
    const defaultHeaders = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    };


    let baseURL = url.format('http://52.69.97.120')

    let instance = axios.create({
        baseURL: baseURL,
        timeout: options.timeout || 30000,
        headers: defaultHeaders
    });

    let userToken = null
    //Set the AUTH token for any request
    instance.interceptors.request.use(function (config) {
        config.headers.Authorization = 'Bearer ' + userToken
        return config;
    });

    return instance;
}

async function executeRequest(method, pathname, data, options = {}) {
    const body = method === 'get' || !data ? {} : {data}
    const reqObj = {method, url: pathname, params: options.query, ...body}

    const baseAxiosRequest = await baseAxios(options)
    return await new Promise((resolve, reject) => {
        return baseAxiosRequest
            .request(reqObj)
            .then(res => {
                // Check API err ApiAuthNotPass
                resolve(res.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export default {
    get(pathname, options) {
        return executeRequest('get', pathname, null, options)
    },

    post(pathname, data, options) {
        return executeRequest('post', pathname, data, options)
    },

    put(pathname, data, options) {
        return executeRequest('put', pathname, data, options)
    },

    delete(pathname, data, options) {
        return executeRequest('delete', pathname, data, options)
    },

    all(promises) {
        return axios.all(promises)
    },
}
