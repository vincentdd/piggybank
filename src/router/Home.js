import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import BillList from '../Components/List/List';
import Chart from '../Components/echarts';
import './Home.css';
import '../styles/common.css'
import {PageHeader, Spin, Alert} from 'antd';
import {connect} from "react-redux";
import * as actions from "../Action/action";


const data = [
    {value: 1, name: "是"},
    {value: 2, name: "否"}
]

class Home extends Component {
    componentDidMount() {
        this.props.handleInit();
    }

    render() {
        return (
            <div>
                {/*<header><div className="title">Piggy<span className="orange-bgc">bank</span></div></header>*/}
                <PageHeader title="PiggyBank"/>
                <Chart/>
                <BillList/>
                <footer className="footer">
                    <NavLink to="/add/one" className="btn-add">Add</NavLink>
                    <NavLink to="/tags" className="btn-tags">View Tags</NavLink>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    handleInit: () => {
        dispatch(actions.getAllTags());
        dispatch(actions.getAllBills());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
