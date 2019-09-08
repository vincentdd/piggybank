import { request, config } from '../utils/index'

const { api } = config;
const { GET_ALL_BILLS } = api;

export async function getAllBills (params) {
    return request({
        url: GET_ALL_BILLS,
        method: 'get',
        data: params,
    })
}