import {take, put, call, fork, select, takeEvery, all, takeLatest} from 'redux-saga/effects'
import * as actions from '../Action/action';
// import {getBills} from '../Reducer/Reducer'
import * as api from '../services/bills'

export function* getAllBills() {
    yield put(actions.isLoading());
    const list = yield call(api.getAllBills);
    if (list !== undefined && list.code === 0) {
        yield put(actions.finishLoading());
        yield put(actions.receiveBillList(list.payload));
        // put(actions.finishLoading())
    }
}

export function* postBill(obj) {
    // yield put(actions.editItem());
    const result = yield call(api.postBill, obj);
    if (result !== undefined && result.code === 0) {
        yield put(actions.getAllBills());
    }
}

export function* watchGetProducts() {
    yield takeEvery(actions.GET_ALL_BILLS, getAllBills);
}

export function* watchPostBill() {
    yield takeEvery(actions.EDIT_ITEM, postBill);
}