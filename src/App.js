import React, { Component } from 'react';
import './App.css';
import { combineReducers, createStore } from 'redux';
import store from './Reducer/reducer';
import Home from './Router/Home'
import Input from './Router/Input'
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

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