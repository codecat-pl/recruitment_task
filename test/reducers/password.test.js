import React, {Component} from 'react';
import {passwordReducer as password} from '../../src/reducers/login';
import {setLoginPassword} from '../../src/actions/login';
import deepFreeze from 'deep-freeze';

const should = require('chai').should();

describe('Password reducer', ()=>{
    const testState = {value: 'secret_password'};
    deepFreeze(testState);
    const emptyState = {};
    deepFreeze(emptyState);

    it('should value should be set', ()=>{
        const newState = password(emptyState, setLoginPassword('asd'));
        newState.should.have.property('value', 'asd');
    });

    it('should return unchanged state if action is not handled by reducer', ()=>{
        const newState = password(testState, {type: 'UNHANDLED_ACTION'});
        newState.should.equal(testState);
    });

    it('should reject password shorter than 6 characters ', ()=>{
        const newState = password(emptyState, setLoginPassword('asdzz'));
        newState.should.have.property('valid', false);
    });

    it('should reject password without big letter', ()=>{
        const newState = password(emptyState, setLoginPassword('asd123'));
        newState.should.have.property('valid', false);
    });

    it('should reject password without small letter', ()=>{
        const newState = password(emptyState, setLoginPassword('ASD123'));
        newState.should.have.property('valid', false);
    });

    it('should reject password without digit', ()=>{
        const newState = password(emptyState, setLoginPassword('ASDasd'));
        newState.should.have.property('valid', false);
    });

    it('should accept password with at least 6 chars, 1 digit, and letter big and small', ()=>{
        const newState = password(emptyState, setLoginPassword('asdf1C'));
        newState.should.have.property('valid', true);
    });

    it('should accept long password with 1 digit, and letter big and small', ()=>{
        const newState = password(emptyState, setLoginPassword('asd123DJHS345jafdhjksfhb4783AJDHKJASHf1C'));
        newState.should.have.property('valid', true);
    });

    it('should accept password with special characters and 1 digit, and letter big and small', ()=>{
        const newState = password(emptyState, setLoginPassword('$@!%*#?^&A1b'));
        newState.should.have.property('valid', true);
    });

    it('should inform about password expectations', ()=>{
        const newState = password(emptyState, setLoginPassword(''));
        newState.should.have.property('message', 'Password should have at least ' +
            '6 characters with 1 big letter, 1 small letter and 1 digit.');
    });
});