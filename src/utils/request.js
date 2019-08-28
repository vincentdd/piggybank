import axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import {message} from 'antd'
import {CORS} from './config'

const fetch = (options) => {
    let {method = 'get', data, fetchType, url} = options

    const cloneData = lodash.cloneDeep(data);
    try {
        let domin = ''
        if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
            domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
            url = url.slice(domin.length)
        }
        const match = pathToRegexp.parse(url)
        url = pathToRegexp.compile(url)(data)
        for (let item of match) {
            if (item instanceof Object && item.name in cloneData) {
                delete cloneData[item.name]
            }
        }
        url = domin + url
    } catch (e) {
        message.error(e.message)
    }

    if (fetchType === 'JSONP') {
        return new Promise((resolve, reject) => {
            console.log(`${qs.stringify(data)}`);
            jsonp(url, {
                param: `${qs.stringify(data)}&callback`,
                name: `jsonp_${new Date().getTime()}`,
                timeout: 4000,
            }, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve({
                    statusText: 'OK',
                    status: 200,
                    data: result
                })
            })
        })
    } else if (fetchType === 'YQL') {
        url = `http://query.yahooapis.com/v1/public/yql?q=select * from json where url='${options.url}?${encodeURIComponent(qs.stringify(options.data))}'&format=json`
        data = null
    }
    console.log(url);
    switch (method.toLowerCase()) {
        case 'get':
            return axios.get(url, {
                params: cloneData,
                responseType: "json"
            })
        case 'delete':
            return axios.delete(url, {
                data: cloneData,
            })
        case 'post':
            let config = {}
            config = {
                transformRequest: [function (data) {
                    // Do whatever you want to transform the data
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
            return axios.post(url, cloneData, config);
        case 'put':
            return axios.put(url, cloneData)
        case 'patch':
            return axios.patch(url, cloneData)
        default:
            return axios(options)
    }
}

export default function request(options) {
    // debugger;
    // if (options.data !== undefined && options.data.page !== undefined) {
    //     console.log(options.url);
    //     //options.url = `${options.url}?${options.data.page}`;
    // }
    if (options.url && options.url.indexOf('//') > -1) {
        console.log(options.url.split('//')[0]);
        console.log(options.url.split('//')[1].split('/')[0]);
        const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`
        console.log(origin);
        // if (window.location.origin !== origin) {
        //     if (CORS && CORS.indexOf(origin) > -1) {
        //         options.fetchType = 'CORS'
        //     } else if (YQL && YQL.indexOf(origin) > -1) {
        //         options.fetchType = 'YQL'
        //     } else {
        //         options.fetchType = 'JSONP'
        //     }
        // }
    }

    return fetch(options).then((response) => {
        const {
            statusText,
            status
        } = response
        let data = options.fetchType === 'YQL' ? response.data.query.results.json : response.data
        if (data instanceof Array) {
            data = {
                list: data,
            }
        }
        return Promise.resolve({
            success: true,
            message: statusText,
            statusCode: status,
            ...data,
        })
    }).catch((error) => {
        const {
            response
        } = error
        let msg
        let statusCode
        if (response && response instanceof Object) {
            const {
                data,
                statusText
            } = response
            statusCode = response.status
            msg = data.message || statusText
        } else {
            statusCode = 600
            msg = error.message || 'Network Error'
        }
        return Promise.reject({
            success: false,
            statusCode,
            message: msg
        })
    })
}
