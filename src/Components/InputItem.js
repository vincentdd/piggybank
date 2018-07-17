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
        console.log(e.target.checked);
        dispatch({
            type: 'TGOGGLE_FLAG',
            flag: e.target.checked
        })
    },
    addBill: (value) => {
        let billsArr = new BillsArr(value);
        billsArr
    },
    getInput: (str, toggleFlag) => {
        if(!str.trim()){
            return;
        }else if(!toggleFlag) {
            // getBillItem(str);
            console.log(str);
        }
        // addBill(input.value)
    }
});

class BillsArr {
    constructor (str){
        this.inputStr = str;
    }
    set inputStr (str){
        this.spliteStr(str);
        this.getBillsArr();
        this.actionArr = this.billsArr.map((current) => {
            this.getActionArr(current.bills, current.date)
        });
    }
    spliteStr(str) {
        const regDate = /^([1-9]|0[1-9]|1[0-2])\.([1-9]|0[1-9]|[1-2][0-9]|3[0-1])$/g,
            regEnter = /\r\n/g;
        let arrDate = str.match(regDate).slice(1),
            arrBills = str.split(regDate),
            result;

        if (arrDate.length !== arrBills.length)
            return false;
        result = arrDate.map((current, index) => {
            let o = {};
            o.bills = current.split(regEnter);
            o.date = arrDate[index];
            return o;
        });
        this.tempArr =  result;
    }
    getBillsArr() {
        let result,
            arr = this.tempArr;

        result = arr.reduce((accumulator, currentValue) => {
            let temp,
                arrOfBills = currentValue.bills,
                date = currentValue.date;

            temp = arrOfBills.map((current) => {
                return {
                    str: current,
                    date:date
                }
            });
            accumulator.concat(temp)
        }, []);

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

function initActionArr(str) {
    let tempArr,result;

    tempArr = spliteStr(str);
    tempArr = setActionArr(tempArr);
    result = tempArr.map(() => {

    })

}

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


