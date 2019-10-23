import {request, config} from '../utils/index'

const {api} = config;
const {GET_ALL_BILLS, POST_BILL, UPDATE_BILL} = api;

export async function getAllBills() {
    return request({
        url: GET_ALL_BILLS,
        method: 'get'
    })
}

export async function postBill(params) {
    return request({
        url: POST_BILL,
        method: 'post',
        ...params
    })
}

export async function updateBill(params) {
    return request({
        url: UPDATE_BILL,
        method: 'post',
        ...params
    })
}

