import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducer/reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};

const baseReducer = persistReducer(persistConfig, rootReducer);  // 包装rootReducer
export const store = createStore(baseReducer);     // 传递给createStore函数 这个export
export const persiststore = persistStore(store);  // 包装store 这个也export
