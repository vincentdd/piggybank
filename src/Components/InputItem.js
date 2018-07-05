import React, { Component } from 'react';
import Checkbox from 'rc-checkbox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const InputLabel = ({ toggleCheckbox, submitStr }) => {
    let input;
    return (
        <div>
            <input ref={ (node) => (
                input = node
            )} type="text"/>
            <button onClick={
                (input) => {
                    if(input.value.trim()){
                        return;
                    }
                    submitStr(input.value)
                }
            }>Add</button>
            <label>
                <Checkbox onChange={(e) => toggleCheckbox(e)} />
                批量导入
            </label>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
        toggleCheckbox: (e) => {
            console.log(e.target.checked);
            // dispatch({
            //     type: 'TGOGGLE_FLAG',
            //     flag: e.target.checked
            // })
        },
        onInputClick: (value) => {
            dispatch({
                    type: 'ADD_ITEM',
                    content: value,
            })
        }
});

function getInput() {
    
}

function spliteStr() {
    
}

function setAction() {
    
}

const mapStateToProps = (state) => ({})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputLabel);

//
// InputItem.propTypes = {
//
// }


