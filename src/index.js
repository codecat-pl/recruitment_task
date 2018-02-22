import 'file-loader?name=[name].[ext]!./index.html';
import './style.scss';

import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, {
    login:{
        email: {value: '', valid: true, message: ''},
        password: {value: '', valid: true, message: ''},
        valid: false,
    }
}, composeEnhancers(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);
