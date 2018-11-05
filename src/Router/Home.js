import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import BillList from '../Components/BillList';
import Chart from '../Components/Echarts';
import './Home.css';

const Home = () => {
    return (
        <div>
            <header><div className={"title"}>Piggy<span className={"orange-bgc"}>bank</span></div></header>
            <Chart data={} />
            <NavLink to="/add/one">Add</NavLink>
            <NavLink to="/tags">View Tags</NavLink>
            <BillList />
        </div>
    )
}

export default Home;