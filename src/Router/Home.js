import React, { Component } from 'react';
import BillList from '../Components/BillList';
import { Route, NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <header><div className={"title"}>Piggy<span className={"orange-bgc"}>bank</span></div></header>
            <NavLink to="/add/one">Add</NavLink>
            <NavLink to="/tags">View Tags</NavLink>
            <BillList />
        </div>
    )
}

export default Home;