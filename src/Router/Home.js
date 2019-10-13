import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import BillList from '../Components/List/List';
import Chart from '../Components/echarts';
import './Home.css';
import '../styles/common.css'
import {PageHeader, Spin, Alert, Layout} from 'antd';
import {connect} from "react-redux";
import * as actions from "../Action/action";
import {store} from '../store';

const {Header, Content, Footer} = Layout;


const data = [
    {value: 1, name: "是"},
    {value: 2, name: "否"}
]

class Home extends Component {
    componentDidMount() {
        this.props.handleInit();
    }

    render() {
        const isInitialing = this.props.isInitialing !== false;
        console.log(store.getState());
        return (
            <Layout>
                {/*<header><div className="title">Piggy<span className="orange-bgc">bank</span></div></header>*/}
                <Header><PageHeader title="PiggyBank"/></Header>
                {isInitialing === true
                    ? <Content>
                        <Spin tip="loading...">
                            <Alert
                                message="拼命加载中..."
                                type="info"
                            />
                        </Spin>
                    </Content>
                    : <Content>
                        <Chart/>
                        <BillList/>
                    </Content>
                }
                <Footer  className="footer">
                    <NavLink to="/add/one" className="btn-add">Add</NavLink>
                    <NavLink to="/tags" className="btn-tags">View Tags</NavLink>
                </Footer >
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({isInitialing: state.isInitialing});

const mapDispatchToProps = (dispatch) => ({
    handleInit: () => {
        dispatch(actions.isInitialing());
        // dispatch(actions.getAllTags());
        // dispatch(actions.getAllBills());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
