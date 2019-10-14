import {take, put, call, fork, select, takeEvery, all, takeLatest} from 'redux-saga/effects'
import * as actions from '../Action/action';
// import {getBills} from '../Reducer/Reducer'
import * as tagApi from '../services/tags';
import * as billApi from '../services/bills';

export function* initial() {
    let [tagsRes, billsRes] = yield all([call(tagApi.getAllTags), call(billApi.getAllBills)]);
    // let tagsRes = yield call(tagApi.getAllTags),
    //     billsRes = yield call(billApi.getAllBills);

    if (tagsRes !== undefined && tagsRes.code === 0 && billsRes !== undefined && billsRes.code === 0) {
        yield put(actions.receiveTags(tagsRes.payload));
        yield put(actions.receiveBillList(billsRes.payload));
        yield put(actions.initialSuccess());
    }
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
