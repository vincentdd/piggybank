import React, {Component} from 'react';
import './App.css';
import Home from './router/Home';
import Input from './router/Input';
import TagsList from './router/Tags';
import NotFound from './router/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store} from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/add" component={Input}/>
                        <Route path="/tags" component={TagsList}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;