export const ADD_ITEM = 'ADD_ITEM';
export const GET_ALL_BILLS = 'GET_ALL_BILLS';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_TAG = 'ADD_TAG';
export const GET_ALL_TAGS = 'GET_ALL_TAGS';
export const EDIT_TAG = 'EDIT_TAG';
export const DELETE_TAG = 'DELETE_TAG';

export function addItem(item) {
    return {type: ADD_ITEM, item: {...item}}
}

export function getAllBills() {
    return {type: GET_ALL_BILLS}
}

export function editItem(item) {
    return {type: EDIT_ITEM, item: {...item}}
}

export function deleteItem(itemId) {
    return {type: DELETE_ITEM, ItemId: itemId}
}

export function addTag(tag) {
    return {type: ADD_TAG, item: {...tag}}
}

export function getAllTags() {
    return {type: GET_ALL_TAGS}
}

export function editTag(tag) {
    return {type: EDIT_TAG, item: {...tag}}
}

export function deleteTag(tagId) {
    return {type: DELETE_TAG, ItemId: tagId}
}