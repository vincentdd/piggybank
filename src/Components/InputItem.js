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
        dispatch({
            type: 'ADD_ITEM',
            content: value,
        })
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

function getBillItem(str) {
    const rege = /[：:]+/;
    let o = {};

    let result = str.split(rege).map((current, index) => {
        index === 0 ? o.name = current : o.price = current;
    });
    return result;
}

function spliteStr(str) {
    const rege = /^([1-9]|0[1-9]|1[0-2])\.([1-9]|0[1-9]|[1-2][0-9]|3[0-1])$/;
    let arrDate = str.match(rege),
        arrBills = str.split(rege),
        result = [];

    result = arrDate.map((current, index) => {
        let o = {};
        o.bills = current;
        o.date = arrDate;
    });

    return result;
}

function setAction() {
    
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


