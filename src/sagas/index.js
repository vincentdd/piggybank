import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../action/action';
import { getBills } from '../reducer/reducer'
import { getAllBills } from '../services/bills'

export function* getAllBills() {
    const products = yield call(getAllBills);
    yield put(actions.getAllBills())
}

export function* watchGetProducts() {
    /*
      takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
      i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
    yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
}