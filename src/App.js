import React, { Component } from 'react';
import './App.css';
import { combineReducers, createStore } from 'redux';
import BillList from './Components/BillList';
import InputItem from './Components/InputItem';
import store from './Reducer/reducer';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
    render() {
        // const {bills, filter} = this.props;
        // const filtered = this.filterSelect(bills, filter);
        return (
            <div className="App" >
                <NavLink to="/inputitem" >Add one</NavLink>
                <Route exact path="/" component={BillList} />
                <Route path="/inputitem" component={InputItem} />
            </div>
        );
    }
}

export default App;