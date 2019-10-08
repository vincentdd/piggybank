import { combineReducers } from 'redux';
import * as actions from '../action/action';
//import {createStore} from "redux/index";

const initial = {
    tags: [
        {
            id: 0,
            text: '餐饮',
            color:null
        },
        {
            id: 1,
            text: '娱乐',
            color:null
        },
        {
            id: 2,
            text: '交通',
            color:null
        }
    ],
    bills: [
        {
            id: 0,
            text: '午饭',
            tagId: 0,
            date: '2018-06-07',
            price: 25
        },
        {
            id: 1,
            text: '耳机',
            tagId: 1,
            date: '2018-02-05',
            price: 2200
        },
        {
            id: 2,
            text: '加油',
            tagId: 2,
            date: '2018-05-31',
            price: 353
        },
        {
            id: 3,
            text: '买菜',
            tagId: 0,
            date: '2018-04-15',
            price: 37
        }
    ],
    filter: 'day',
    model: 'list',
    toggleFlag: false,
    visiableFlag: false
};

///////////////////////////////////////////////////////////////////////////////////////
function deepFreeze (o) {
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

// const bill = (state, action) => {
//     switch (action.type){
//         case 'ADD_ITEM':
//             return {
//                 id: action.id,
//                 text: action.text,
//                 date: action.date,
//                 price: action.price,
//                 tagId: action.tagId
//             };
//         case 'EDIT_ITEM':
//             if(state.id !== action.id){
//                 return state;
//             }
//             return {
//                 ...state,
//                 tagId: action.tagId
//             };
//         default:
//             return state;
//     }
// }

const tag = (state, action) => {
    switch (action.type){
        case 'ADD_TAG':
            return {
                id: action.id,
                text: action.text
            };
        case 'EDIT_TAG':
            if(state.id !== action.id){
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

const bills = (bills = [], action) => {
    let ITEM_ID = bills.length;
    switch (action.type){
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
    switch (action.type){
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
    switch (action.type){
        case 'ADD_TAG':
            return [
                ...state,
                tag(undefined, { ...action, id: TAG_ID })
            ];
        case 'EDIT_TAG':
            return state.map(current => tag(current, action));
        case actions.RECEIVE_TAGS:
            return state;
        default:
            return state;
    }
}

const filter = (state = initial.filter || 'NONE', action) => {
    switch (action.type){
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;
    }
}

const model = (state = initial.model || 'list', action) => {
    switch (action.type){
        case 'SET_MODEL':
            return action.model;
        default:
            return state;
    }
}

const toggleFlag = (state = initial.toggleFlag ||  false, action) => {
    switch (action.type){
        case 'TOGGLE_FLAG':
            return action.flag;
        default:
            return state;
    }
}

const toggleVisiableFlag = (state = initial.visiableFlag ||  false, action) => {
    switch (action.type){
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

// store.dispatch({
//     type: 'ADD_ITEM',
//     text: '003',
//     date: '2018-07-01',
//     price: 100,
//     tagId: 1
// })
// const testTag = () => {
//   const tagBefore = [
//     {
//       id: 0,
//       text: 'food'
//     },
//     {
//       id: 1,
//       text: 'game'
//     }
//   ];

//   const tagAfter = [
//     {
//       id: 0,
//       text: 'food'
//     },
//     {
//       id: 1,
//       text: 'game'
//     },
//     {
//       id: 2,
//       text: 'others'
//     }
//   ]

// const action = {
//     type: 'ADD_TAG',
//     text: 'others'
// }

//   deepFreeze(tagBefore);

//   expect(
//     tagList(tagBefore, action)
//   ).toEqual(tagAfter);
// }

// const testbill = () => {
//   const billBefore =
//     [
//       {
//         id: 0,
//         text: 'test',
//         tag: 'food',
//         date: '2018-05-01',
//         price: '25'
//       },
//       {
//         id: 1,
//         text: '停车费',
//         tag: undefined,
//         date: '2018-05-01',
//         price: '7'
//       }
//     ];

//   const billAfter = [
//       {
//         id: 0,
//         text: 'test',
//         tag: '买菜',
//         date: '2018-05-01',
//         price: '25'
//       },
//       {
//         id: 1,
//         text: '停车费',
//         tag: undefined,
//         date: '2018-05-01',
//         price: '7'
//       }
//     ];

// const action = {
//   type: 'SET_TAG',
//   id: 0,
//   tag: '买菜'
// };

//   deepFreeze(billBefore);

//   expect(
//     billList(billBefore, action)
//   ).toEqual(billAfter);
// };

// testbill();
// testTag();
// console.log(store.getState());
// console.log("pass");
