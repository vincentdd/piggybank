import { combineReducers, createStore } from 'redux';
//import {createStore} from "redux/index";

const initial = {
    tags: [
        {
            id: 0,
            text: '餐饮'
        },
        {
            id: 1,
            text: '娱乐'
        },
        {
            id: 2,
            text: '交通'
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
    filter: {
        filter: 'day'
    },
    model: {
        model: 'list'
    }
}

let ITEM_ID = initial.bills.length,
    TAG_ID = initial.tags.length;
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
};

const bill = (state, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return {
                id: ++ITEM_ID,
                text: action.text,
                date: action.date,
                price: action.price,
                tagId: action.tagId
            };
        case 'SET_TAG':
            if(state.id !== action.id){
                return state;
            }
            return {
                ...state,
                tagId: action.tagId
            };
        default:
            return state;
    }
}

const tag = (state, action) => {
    switch (action.type){
        case 'ADD_TAG':
            return {
                id: ++TAG_ID,
                text: action.text
            };
        case 'SET_TAG':
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
}

const bills = (state = initial.bills || [], action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return [
                ...state,
                bill(undefined, action)
            ];
        case 'SET_TAG':
            return state.map(current => bill(current, action));
        default:
            return state;
    }
};

const tags = (state = initial.tags || [], action) => {
    switch (action.type){
        case 'ADD_TAG':
            return [
                ...state,
                tag(undefined, action)
            ];
        case 'SET_TAG':
            return state.map(current => tag(current, action));
        default:
            return state;
    }
}

const filter = (state = initial.filter || {filter: 'NONE'}, action) => {
    switch (action.type){
        case 'SET_FILTER':
            return {filter: action.filter};
        default:
            return {filter: 'NONE'};
    }
}

const model = (state = initial.model || {model: 'list'}, action) => {
    switch (action.type){
        case 'SET_MODEL':
            return {filter: action.model};
        default:
            return {filter: 'list'};
    }
}
// const { combineReducers, cr eateStore } = Redux;
const piggyBank = combineReducers({
    bills,
    tags,
    filter,
    model
})

const store = createStore(piggyBank);
export default store;
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
