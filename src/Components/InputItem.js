import React, { Component } from 'react';
import Checkbox from 'rc-checkbox';
import { connect } from 'react-redux';

const InputLabel = () => {
    let input;
    return (
        <div>
            <input ref={ node => {
                input = node;
            }} type="text"/>
            <button>Add</button>
            <label>
                <Checkbox />
                批量导入
            </label>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputClick: value => {
            dispatch({
                    type: 'ADD_ITEM',
                    content: value,
            })
        }
    }
}

const mapStateToProps = (state) => {}
const InputItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputLabel);
export default InputItem;
