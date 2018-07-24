import React, { Component } from 'react';
import './App.css';
import { combineReducers, createStore } from 'redux';
import BillList from './Components/BillList';
import InputItem from './Components/InputItem';
import store from './Reducer/reducer';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <NavLink to="inputitem">Add one</NavLink>
                    <Route path="/inputitem" component={InputItem} />
                    <Route path="/billlist" component={BillList} />
                </Switch>
            </div>
        );
    }
}

export default App;