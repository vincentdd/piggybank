import {take, put, call, fork, select, takeEvery, all, takeLatest} from 'redux-saga/effects'
// import * as actions from '../action/action';
// import * as api from '../services/bills'
import {getBills} from '../Reducer/reducer'
import {watchGetProducts, watchPostBill} from './bills'
import {watchGetTags} from "./tags";

export default function* root() {
    yield all([fork(watchGetProducts),fork(watchPostBill),fork(watchGetTags)])
}