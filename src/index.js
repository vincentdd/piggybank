import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/lib/integration/react';


ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();
