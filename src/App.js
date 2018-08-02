import React, { Component } from 'react';
import './App.css';
import { combineReducers, createStore } from 'redux';
import store from './Reducer/reducer';
import Home from './Router/Home';
import Input from './Router/Input';
import NotFound from './Router/NotFound';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Single from "./Components/Single";

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={Input} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;