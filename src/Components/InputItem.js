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
<<<<<<< HEAD
            <button onClick={}>Add</button>
=======
            <button>Add</button>
            <Checkbox>批量导入</Checkbox>
>>>>>>> 11d285f6c2c2cbfbf6e7b217e901b13bbb824d1f
        </div>
    )
}

<<<<<<< HEAD


const mapDispatchToProps = () => {
    onAddClick(input.value);
    input.value = '';
}
=======
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
    mapStateToProps(),
    mapDispatchToProps()
)(InputLabel);
export default InputItem;
>>>>>>> 11d285f6c2c2cbfbf6e7b217e901b13bbb824d1f
