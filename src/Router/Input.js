import React, { Component } from 'react';
import Multiple from '../Components/Multiple';
import Single from '../Components/Single';
import { Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import '../styles/input.css';

const Input = ({ history, match }) => {
    return (
        <div>
            <NavLink to={`/`}>Back</NavLink>
            <ul>
                <NavLink className={classNames('nav-link test1 test2')} to={`${match.url}/list`} activeClassName='selected'>Add List</NavLink>
                <NavLink className={classNames('nav-link')} to={`${match.url}/one`} activeClassName='selected'>Add One</NavLink>
            </ul>
            <Route path={`${match.url}/one`} component={Single} />
            <Route path={`${match.url}/list`} component={Multiple} />
        </div>
    )
}


export default Input;