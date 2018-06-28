import React, { Component } from 'react';

export default InputItem = ({
    onAddClick
}) => {
    let input;
    return (
        <div>
            <input ref={ node => {
                input = node;
            }} type="text"/>
            <button onClick={() => {
                onAddClick(input.value);
                input.value = '';
            }}>Add</button>
        </div>
    )
}