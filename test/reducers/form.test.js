import React, {Component} from 'react';
import {formReducer as form} from '../../src/reducers/login';
import {
    setLoginEmail, setLoginPassword, setLoginRemember, setLoginStatus
} from '../../src/actions/login';
import deepFreeze from 'deep-freeze';

const should = require('chai').should();

describe('Login form reducer', ()=>{
    const emptyState = {};
    deepFreeze(emptyState);

    it('should return unchanged state if action is not handled by reducer', ()=>{
        const newState = form(emptyState, {type: 'UNHANDLED_ACTION'});
        newState.should.equal(emptyState);
    });
    it('should set email value', ()=>{
        const newState = form(emptyState, setLoginEmail('agent@smith.com'));
        newState.should.have.nested.property('email.value', 'agent@smith.com');
    });

    it('should set password value',()=>{
        const newState = form(emptyState, setLoginPassword('agent'));
        newState.should.have.nested.property('password.value', 'agent');
    });
    it('should set remember login to true',()=>{
        const newState = form(emptyState, setLoginRemember(true));
        newState.should.have.property('remember', true);
    });
    it('should set remember login to false',()=>{
        const newState = form(emptyState, setLoginRemember(false));
        newState.should.have.property('remember', false);
    });

    it('should invalidate form if email is invalid',()=>{
        const s1 = form(emptyState, setLoginEmail('email'));
        const newState = form(s1, setLoginPassword('asdQWE12'));
        newState.should.have.property('valid', false);
    });
    it('should invalidate form if password is invalid',()=>{
        const s1 = form(emptyState, setLoginEmail('agent@smith.com'));
        const newState = form(s1, setLoginPassword('asdQW'));
        newState.should.have.property('valid', false);
    });

    it('should set valid to true if password and email are valid',()=>{
        const s1 = form(emptyState, setLoginEmail('agent@smith.com'));
        const newState = form(s1, setLoginPassword('asdQW123'));
        newState.should.have.property('valid', true);
    });


    it('should set status and message',()=>{
        const newState = form(emptyState, setLoginStatus('working', 'message'));
        newState.should.have.property('status', 'working');
        newState.should.have.property('message', 'message');
    });



});

