import { request, config } from '../utils'

const { api } = config;
const { GET_ALL_BILLS } = api;

export async function query (params) {
    return request({
        url: GET_ALL_BILLS,
        method: 'get',
        data: params,
    })
}