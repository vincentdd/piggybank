import React, { Component } from 'react';
import BillList from '../Components/BillList';
import { Route, NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavLink to="/add/one">Add</NavLink>
            <BillList />
        </div>
    )
}

export default Home;