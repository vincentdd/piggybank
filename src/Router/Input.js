import React, { Component } from 'react';
import Multiple from '../Components/Multiple';
import Single from '../Components/Single';
import { Route, NavLink } from 'react-router-dom';

const Input = ({ history, match }) => {
    const back = e => {
        e.stopPropagation();
        history.goBack();
    };
    return (
        <div>
            <div onClick={ back }>Back</div>
            <ul>
                <NavLink to={`${match.url}/list`}>Add List</NavLink>
                <NavLink to={`${match.url}/one`}>Add One</NavLink>
            </ul>
            <Route path={`${match.url}/one`} component={Single} />
            <Route path={`${match.url}/list`} component={Multiple} />
        </div>
    )
}


export default Input;