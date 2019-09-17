import {take, put, call, fork, select, takeEvery, all} from 'redux-saga/effects'
import * as actions from '../action/action';
import {getBills} from '../reducer/reducer'
import * as api from '../services/bills'

export function* getAllBills() {
    const list = yield call(api.getAllBills);
    if (list.code === 0)
        yield put(actions.receiveBillList(list.payload));
}

export function* watchGetProducts() {
    yield takeEvery(actions.GET_ALL_BILLS, getAllBills)
}

export default function* root() {
    yield all([fork(watchGetProducts)])
}