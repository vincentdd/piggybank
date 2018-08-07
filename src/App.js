import React, { Component } from 'react';
import './App.css';
import Home from './Router/Home';
import Input from './Router/Input';
import NotFound from './Router/NotFound';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {store, persiststore} from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persiststore}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/add" component={Input} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </PersistGate>

            </Provider>
        );
    }
}

export default App;