import React, { Component } from 'react';
// import Checkbox from 'rc-checkbox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Multiple extends Component{
    constructor(){
        super();
    }
    handleClick(e){
        let props = this.props,
            input  = this.input;
        e.preventDefault();
        const temp = input.value,
            flag = props.toggleFlag;
        props.getInput(temp, flag);
        input.value = '';
        props.history.goBack();
    }
    render(){
        // let props = this.props;
        return(
            <form>
                <label htmlFor="name">输入数组:<input name="name" type="text" ref={(input) => this.input = input}/></label>
                <button onClick={(e) => this.handleClick(e)} > Add </ button>
                {/*<label>*/}
                    {/*<Checkbox onChange={(e) => props.toggleCheckbox(e)} />*/}
                    {/*批量导入*/}
                {/*</label>*/}
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    // toggleCheckbox: (e) => {
    //     dispatch({
    //         type: 'TOGGLE_FLAG',
    //         flag: e.target.checked
    //     })
    // },
    getInput: (str) => {
        let temp = str.trim()
        if(temp === ''){
            return;
        }else {
            console.log('add a lot')
            let billsArr = new BillsArr(temp);
            console.log(billsArr.actionArr);
            billsArr.inputStr.map((cunrrent) => {
                dispatch({
                    type: 'ADD_ITEM',
                    payload: {...cunrrent}
                });
            });
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
        if (typeof obj === "object" && obj.length !== 0)
            this.getBillsArr(obj);
        this.actionArr = this.billsArr.map((current) => {
            return this.getActionArr(current.bills, current.date);
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

        if(typeof date === 'object')
            dateTime = date;
        else if(typeof date === 'number')
            dateTime = new Date(`${year}.${date}`);
        else
            dateTime = new Date();
        return {
            text: temp[0],
            price: temp[1],
            date: dateTime
        }
    }
}
const mapStateToProps = (state) => ({
    toggleFlag: state.toggleFlag
});
// Multiple.propTypes = {
//     getInput:PropTypes.func
// };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Multiple);
