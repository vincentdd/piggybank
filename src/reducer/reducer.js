import {combineReducers} from 'redux';
import * as actions from '../Action/action';
//import {createStore} from "redux/index";

// const initial = function () {
//
// }

///////////////////////////////////////////////////////////////////////////////////////
function deepFreeze(o) {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop)
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
}

const tag = (state, action) => {
    switch (action.type) {
        case 'ADD_TAG':
            return {
                id: action.id,
                text: action.text
            };
        case 'EDIT_TAG':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

const isInitialing = (isInitialing = false, action) => {
    switch (action.type) {
        case actions.IS_INITIALING:
            return {isInitialing: true};
        case actions.INITIAL_SUCCESS:
            return {isInitialing: false};
    }
}

const bills = (bills = [], action) => {
    let ITEM_ID = bills.length;
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...bills,
                {...action.payload, id: ITEM_ID}
            ];
        // case 'EDIT_ITEM':
        //     return bills.map(current =>
        //         (current.id === action.payload.id)
        //             ? {...action.payload}
        //             : current);
        case actions.RECEIVE_BILLS_LIST:
            return [...action.billsList];
        default:
            return bills;
    }
};

const isLoading = (isLoading = false, action) => {
    switch (action.type) {
        case actions.ISLOADING:
            return action.isLoading;
        case actions.FINISH_LOADING:
            return action.isLoading;
        default:
            return isLoading;
    }
};

const tags = (state = [], action) => {
    let TAG_ID = state.length;
    switch (action.type) {
        case 'ADD_TAG':
            return [
                ...state,
                tag(undefined, {...action, id: TAG_ID})
            ];
        case 'EDIT_TAG':
            return state.map(current => tag(current, action));
        case actions.RECEIVE_TAGS:
            return action.payload;
        default:
            return state;
    }
}

const filter = (state = {} || 'NONE', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;
    }
}

const model = (state = {} || 'list', action) => {
    switch (action.type) {
        case 'SET_MODEL':
            return action.model;
        default:
            return state;
    }
}

const toggleFlag = (state = {} || false, action) => {
    switch (action.type) {
        case 'TOGGLE_FLAG':
            return action.flag;
        default:
            return state;
    }
}

const toggleVisiableFlag = (state = {} || false, action) => {
    switch (action.type) {
        case 'TOGGLE_VISIABLE_FLAG':
            return action.visiableFlag;
        default:
            return state;
    }
};

// const { combineReducers, cr eateStore } = Redux;
const piggyBank = combineReducers({
    bills,
    tags,
    filter,
    model,
    toggleFlag,
    isLoading,
    toggleVisiableFlag
});

export default piggyBank;


