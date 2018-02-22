import React, {Component} from 'react';
import {emailReducer as email} from '../../src/reducers/login';
import {setLoginEmail} from '../../src/actions/login';
import deepFreeze from 'deep-freeze';

const should = require('chai').should();

describe('Email reducer', ()=>{
    const testState = {value: 'test@test.com'};
    deepFreeze(testState);
    const emptyState = {};
    deepFreeze(emptyState);

    it('should return unchanged state if action is not handled by reducer', ()=>{
        const newState = email(testState, {type: 'UNHANDLED_ACTION'});
        newState.should.equal(testState);
    });
    it('should set email value', ()=>{
        const newState = email(emptyState, setLoginEmail('agent@smith.com'));
        newState.should.have.property('value', 'agent@smith.com');
        newState.should.have.property('valid', true);
        newState.should.have.property('message', '');
    });

    it('should set value with error if not have @',()=>{
        const newState = email(emptyState, setLoginEmail('agent'));
        newState.should.have.property('value', 'agent');
        newState.should.have.property('valid', false);
        newState.should.have.property('message', 'Email is not valid!');
    })
    it('should set value with error if don\'t have dot in domain',()=>{
        const newState = email(emptyState, setLoginEmail('agent@asd'));
        newState.should.have.property('value', 'agent@asd');
        newState.should.have.property('valid', false);
        newState.should.have.property('message', 'Email is not valid!');
    })
});