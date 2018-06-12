import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers, createStore } from 'redux';
import BillList from './Components/BillList';

class App extends Component {
    billFilter(bills, timeFilter){
        const filtered = [];
        if(timeFilter === 'NONE'){
            return bills;
        }else if(timeFilter === 'DAY'){

        }
    };
    render() {
        const {bills, timeFilter} = this.props;
        const filtered = this.billFilter(bills, timeFilter);
        return (
            <div className="App" >
                 <BillList bills = {this.props.bills}>
                 </BillList>
            </div>
        );
    }
}

export default App;