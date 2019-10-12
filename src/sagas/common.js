import {take, put, call, fork, select, takeEvery, all, takeLatest} from 'redux-saga/effects'
import * as actions from '../Action/action';
// import {getBills} from '../reducer/reducer'
import * as api from '../services/tags'

export function* initial() {
    yield put(actions.GET_ALL_TAGS);
    yield put(actions.GET_ALL_BILLS);
    // yield put(actions.isLoading());
    // const list = yield call(api.getAllTags);
    // if (list !== undefined && list.code === 0) {
    //     // yield put(actions.finishLoading());
    //     yield put(actions.receiveTags(list.payload));
    //     // put(actions.finishLoading())
    // }
}

export function* watchInitial() {
    yield takeEvery(actions.IS_INITIALING, initial);
}
