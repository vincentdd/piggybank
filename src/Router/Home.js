import React, { Component } from 'react';
import BillList from '../Components/BillList';
// import InputItem from './Components/InputItem';
import { Route, NavLink, Switch} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <NavLink to="inputitem">Add one</NavLink>
            <BillList />
        </div>
    )
}

export default Home;