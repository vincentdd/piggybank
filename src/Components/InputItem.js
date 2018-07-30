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
    getBillsArr(arr) {
        let result;

        result = arr.reduce((accumulator, currentValue) => {
            let temp = [],
                arrOfBills = currentValue.billsStr.split(' '),
                date = currentValue.date;

            arrOfBills.forEach((current) => {
                if (current !== undefined && current !== '')
                    temp = [...temp, { bills: current, date:date}];
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

        console.log(typeof date);
        console.log(`${year}.${date}`);
        console.log(typeof `${year}.${date}`);
        if(typeof date === 'object')
            dateTime = date;
        else if(typeof date === 'number')
            dateTime = new Date(`${year}.${date}`);
        else
            dateTime = new Date();
        return {
            name: temp[0],
            price: temp[1],
            date: dateTime
        }
    }
}

const mapStateToProps = (state) => ({
    toggleFlag: state.toggleFlag
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputLabel);
