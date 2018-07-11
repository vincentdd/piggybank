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
            getBillItem(str);
        }
        // addBill(input.value)
    }
});

function getBillItem(str) {
    const regex = /[:：]+/;
    let jsonStr, o = {};

            

}

function spliteStr() {
    
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


