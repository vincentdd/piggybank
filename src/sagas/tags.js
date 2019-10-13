import {take, put, call, fork, select, takeEvery, all, takeLatest} from 'redux-saga/effects'
import * as actions from '../Action/action';
// import {getBills} from '../Reducer/Reducer'
import * as api from '../services/tags'

export function* getAllTags() {
    // yield put(actions.isLoading());
    const list = yield call(api.getAllTags);
    if (list !== undefined && list.code === 0) {
        // yield put(actions.finishLoading());
        yield put(actions.receiveTags(list.payload));
        // put(actions.finishLoading())
    }
}

export function* watchGetTags() {
    yield takeEvery(actions.GET_ALL_TAGS, getAllTags);
}
