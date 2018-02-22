import React from "react";
import {mount, shallow} from "enzyme";
import chai from "chai";
import sinon from 'sinon';
chai.should();
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../src/reducers';
import * as actions from '../../src/actions/login';

import EmailInput from "../../src/elements/email_input";
import PasswordInput from "../../src/elements/password_input";
import ConnectedLoginForm, {LoginForm} from "../../src/elements/login_form";

describe('<ConnectedLoginForm/>', ()=>{
    it('should fill prop setLoginEmail with action', ()=>{
        const {Element, store} = setup();
        Element.prop('setLoginEmail')('test');
        store.getState().login.email.value.should.equal('test');
    });
    it('should fill prop setLoginPassword with action', ()=>{
        const {Element, store} = setup();
        Element.prop('setLoginPassword')('test');
        store.getState().login.password.value.should.equal('test');
    });
    it('should fill prop setLoginRemember with action', ()=>{
        const {Element, store} = setup();
        Element.prop('setLoginRemember')(true);
        store.getState().login.remember.should.equal(true);
    });

    it('should fill prop submitLogin with action', ()=>{
        const {Element, store} = setup();
        Element.prop('submitLogin')();
        store.getState().login.status.should.equal('error');
    });
});


function setup(statePatch = {}){
    const state = {
        login: Object.assign({
            email: {
                value: 'asd@asd.pl',
                valid: true,
                message: 'email test'
            },
            password: {
                value: 'qweASD123',
                valid: true,
                message: 'password test'
            },
            valid: false,
            status: '',
            message: ''
        }, statePatch)
    };

    const store = createStore(
        reducers,
        state,
        applyMiddleware(thunk)
    );

    const Container = mount(
        <Provider store={store}>
            <ConnectedLoginForm/>
        </Provider>
    );

    return {
        Container,
        state,
        store,
        Element: Container.find(LoginForm),
        passwordInput: Container.find(PasswordInput),
        emailInput: Container.find(EmailInput),
        submit: Container.find('.login-button'),
    }
}