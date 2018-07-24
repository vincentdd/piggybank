import React, { Component } from 'react';
import './App.css';
import { combineReducers, createStore } from 'redux';
import BillList from './Components/BillList';
import Input from './Router/Input';
import Home from './Router/Home';
import store from './Reducer/reducer';
import { Route, NavLink, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/inputitem" component={Input} />
                </Switch>
            </div>
        );
    }
}

export default App;