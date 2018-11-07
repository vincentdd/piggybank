import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import BillList from '../Components/BillList';
import Chart from '../Components/Echarts';
import './Home.css';

const data = [
    {value: 1, name: "是"},
    {value: 2, name: "否"}
]
const Home = () => {
    return (
        <div>
            <header><div className={"title"}>Piggy<span className={"orange-bgc"}>bank</span></div></header>
            <Chart />
            <NavLink to="/add/one" className="btn-add">Add</NavLink>
            <NavLink to="/tags" className="btn-tags">View Tags</NavLink>
            <BillList />
        </div>
    )
}

export default Home;