import React, { Component } from 'react';
import Tags from '../Components/Tags';
import { Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';

const TagsList = () => {
    return (
        <div>
            <NavLink to={`/`}>Back</NavLink>
            <Tags />
        </div>
    )
};


export default TagsList;