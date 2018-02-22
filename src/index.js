import 'file-loader?name=[name].[ext]!./index.html';
import './style.scss';

import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';

import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(regular);
fontawesome.library.add(brands);

let store = createStore(reducers, {
    login:{
        email: {value: '', valid: true, message: ''},
        password: {value: '', valid: true, message: ''},
        valid: false,
    }
}, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);
