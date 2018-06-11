import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers, createStore } from 'redux';
import BillList from './Components/BillList';
import store from './Reducer/reducer';

class App extends Component {
    billFilter(billList, timeFilter){
        const filtered = [];
        if(timeFilter === 'NONE'){
            return billList;
        }else if(timeFilter === 'DAY'){

        }
    };
    render() {
        console.log(store.getState());
        const {billList, timeFilter} = this.props;
        const filtered = this.billFilter(billList, timeFilter);
        return (
            <div className="App" {...store.getState()}>
                 <BillList
                     billList = {this.props.billList}>
                 </BillList>
            </div>
        );
    }
}

export default App;