import { request, config } from '../utils/index'

const { api } = config;
const { GET_ALL_TAGS } = api;

export async function getAllTags () {
    return request({
        url: GET_ALL_TAGS,
        method: 'get',
    })
}