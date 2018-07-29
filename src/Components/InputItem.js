import React, { Component } from 'react';
import Checkbox from 'rc-checkbox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const InputLabel = ({...props}) => {
    let input = null;
    return (
        <div>
            <input type="text" ref={ node => input = node} />
            <button onClick={e => {
                e.preventDefault();
                const temp = input.value,
                    flag = props.toggleFlag;
                props.getInput(temp, flag);
                input.value = '';
            }}>Add</button>
            <label>
                <Checkbox onChange={(e) => props.toggleCheckbox(e)} />
                批量导入
            </label>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCheckbox: (e) => {
        dispatch({
            type: 'TOGGLE_FLAG',
            flag: e.target.checked
        })
    },
    // addBill: (value) => {
    //     if (value === undefined || value === null)
    //         return;
    //     let billsArr = new BillsArr(value);
    //     console.log(billsArr.actionArr);
    //     billsArr.actionArr.map((cunrrent) => {
    //         dispatch({
    //             type: 'ADD_ITEM',
    //             ...cunrrent
    //         });
    //     });
    // },
    getInput: (str, toggleFlag) => {
        let temp = str.trim()
        if(temp == null){
            return;
        }else if(toggleFlag) {
            console.log('add a lot')
            let billsArr = new BillsArr(temp);
            console.log(billsArr.actionArr);
            billsArr.inputStr.map((cunrrent) => {
                dispatch({
                    type: 'ADD_ITEM',
                    ...cunrrent
                });
            });
        }else{
            console.log('add one')
        }
        // addBill(input.value)
    }
});

class BillsArr {
    constructor (str){
        this._inputStr = str;
    }
    set inputStr(str){
        this._inputStr = str;
    }
    get inputStr (){
        let obj = JSON.parse(this._inputStr);
        if (typeof obj === "object" && obj.length != 0)
            this.getBillsArr(obj);
        this.actionArr = this.billsArr.map((current) => {
            this.getActionArr(current.bills, current.date)
        });
        return this.actionArr;
    }
    // spliteStr(str) {
    //     const regDate = /\b(10|1?[12]|[1-9])\.(3[01]|10|20|[12][1-9])\b/g,
    //         regEnter = /\s/g;
    //     let arrDate = str.match(regDate).slice(1),
    //         arrBills,
    //         tempStr = str,
    //         result;
    //     console.log(arrDate);
    //     console.log(tempStr.match(regDate).length);
    //     for (let length = tempStr.match(regDate).length - 1; length > 0; length --) {
    //         tempStr = tempStr.replace(regDate, '|')
    //     }
    //     // while (tempStr.match(regDate).length > 1) {
    //     // }
    //     arrBills = tempStr.split('|');
    // //     /^\b([1-9]|0[1-9]|1[0-2])\.([1-9]|0[1-9]|[1-2][0-9]|3[0-1])\b$/g
    //     console.log('str: ' + tempStr);
    //     // if (arrDate.length !== arrBills.length)
    //     //     return false;
    //     result = arrBills.map((current, index) => {
    //         let temp = current.split(regEnter);
    //         if (temp.length !== 0)
    //             return {
    //                 bills: temp,
    //                 date: arrDate[index]
    //             }
    //     });
    //     console.log(result);
    //     this.tempArr =  result;
    // }
    getBillsArr(arr) {
        let result;

        result = arr.reduce((accumulator, currentValue) => {
            let temp,
                arrOfBills = currentValue.billsStr.split(' '),
                date = currentValue.date;

            temp = arrOfBills.map((current) => {
                if (current !== '')
                    return {
                        str: current,
                        date:date
                    }
            });
            accumulator = accumulator.concat(temp);
            return accumulator;
        }, []);
        console.log(result)
        this.billsArr = result;
    }
    getActionArr(str, date) {
        const rege = /[：:]+/g;
        let temp = str.split(rege),
            year = new Date().getFullYear(),
            dateTime;

        if(typeof date === 'object')
            dateTime = date;
        else if(typeof date === 'string')
            dateTime = new Date(`${year}.date`);
        else
            dateTime = new Date();
        return {
            name: temp[0],
            price: temp[1],
            date: dateTime
        }
    }
}
//
// function getBillItem(str, date) {
//     const rege = /[：:]+/g;
//     let temp = str.split(rege),
//         year = new Date().getFullYear(),
//         dateTime;
//
//     if(typeof date === 'object')
//         dateTime = date;
//     else if(typeof date === 'string')
//         dateTime = new Date(`${year}.date`);
//     else
//         dateTime = new Date();
//     return {
//         name: temp[0],
//         price: temp[1],
//         date: dateTime
//     }
// }
//
// function spliteStr(str) {
//     const regDate = /^([1-9]|0[1-9]|1[0-2])\.([1-9]|0[1-9]|[1-2][0-9]|3[0-1])$/g,
//             regEnter = /\r\n/g;
//     let arrDate = str.match(regDate).slice(1),
//         arrBills = str.split(regDate),
//         result;
//
//     if (arrDate.length !== arrBills.length)
//         return false;
//     result = arrDate.map((current, index) => {
//         let o = {};
//         o.bills = current.split(regEnter);
//         o.date = arrDate[index];
//         return o;
//     });
//     return result;
// }
//
// function setActionArr(arr) {
//     let result;
//
//     result = arr.reduce((accumulator, currentValue) => {
//         let temp,
//             arrOfBills = currentValue.bills,
//             date = currentValue.date;
//
//         temp = arrOfBills.map((current) => {
//             return {
//                 str: current,
//                 date:date
//             }
//         });
//         accumulator.concat(temp)
//     }, []);
// }

const mapStateToProps = (state) => ({
    toggleFlag: state.toggleFlag
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputLabel);

//
// InputItem.propTypes = {
//
// }


