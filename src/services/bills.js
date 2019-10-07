import { request, config } from '../utils/index'

const { api } = config;
const { GET_ALL_BILLS, POST_BILL } = api;

export async function getAllBills (params) {
    return request({
        url: GET_ALL_BILLS,
        method: 'get',
        data: params,
    })
}

export async function postBill (params) {
    return request({
        url: POST_BILL,
        method: 'post',
        data: params,
    })
}