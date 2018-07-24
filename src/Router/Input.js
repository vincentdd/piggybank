import React, { Component } from 'react';
import InputItem from '../Components/InputItem';
// import InputItem from './Components/InputItem';
import { Route, NavLink, Switch} from 'react-router-dom'

const Input = ({ history }) => {
    const back = e => {
        e.stopPropagation();
        history.goBack();
    };
    return (
        <div onClick={back}>
            <div>X</div>
            <InputItem />
        </div>
    )
}

export default Input;