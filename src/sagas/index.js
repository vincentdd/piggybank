import {take, put, call, fork, select, takeEvery, all, takeLatest} from 'redux-saga/effects'
import * as actions from '../action/action';
import {getBills} from '../reducer/reducer'
import * as api from '../services/bills'

export function* getAllBills() {
    console.log('3')
    yield put(actions.isLoading());
    const list = yield call(api.getAllBills);
    if (list.code === 0) {
        console.log('4')
        yield put(actions.finishLoading());
        yield put(actions.receiveBillList(list.payload));
        // put(actions.finishLoading())
    }
}

export function* watchGetProducts() {
    console.log(actions);
    // yield takeLatest(actions.GET_ALL_BILLS, getAllBills);
    // yield takeEvery(actions.GET_ALL_BILLS, put, [actions.isLoading()]);
    console.log('1')
    yield takeEvery(actions.GET_ALL_BILLS, getAllBills);
    console.log('2')
}

export default function* root() {
    yield all([fork(watchGetProducts)])
}