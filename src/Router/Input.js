import React, { Component } from 'react';
import InputItem from '../Components/InputItem';
import { Route, NavLink } from 'react-router-dom'
import BillList from "../Components/BillList";

const Input = ({ history }) => {
    const back = e => {
        e.stopPropagation();
        history.goBack();
    };
    return (
        <div>
            <NavLink onClick={ back }>Back</NavLink>
            <Route path="/inputitem" component={InputItem} />
        </div>
    )
}

export default Input;