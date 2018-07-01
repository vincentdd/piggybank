import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers, createStore } from 'redux';
import BillList from './Components/BillList';
import InputItem from './Components/InputItem';
import store from './Reducer/reducer';

class App extends Component {
    render() {
        // const {bills, filter} = this.props;
        // const filtered = this.filterSelect(bills, filter);
        return (
            <div className="App" >
                 <InputItem onAddClick ></InputItem>
                 <BillList>
                 </BillList>
            </div>
        );
    }
}

export default App;