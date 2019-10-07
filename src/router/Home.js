import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import BillList from '../Components/List/List';
import Chart from '../Components/echarts';
import './Home.css';
import '../styles/common.css'
import { PageHeader } from 'antd';


const data = [
    {value: 1, name: "是"},
    {value: 2, name: "否"}
]
const Home = () => {
    return (
        <div>
            {/*<header><div className="title">Piggy<span className="orange-bgc">bank</span></div></header>*/}
            <PageHeader title="PiggyBank" />
            <Chart />
            <BillList />
            <footer className="footer">
                <NavLink to="/add/one" className="btn-add">Add</NavLink>
                <NavLink to="/tags" className="btn-tags">View Tags</NavLink>
            </footer>
        </div>
    )
}

export default Home;