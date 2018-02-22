import React, {Component} from 'react';
import sinon from 'sinon';
import moxios from 'moxios'
require('chai').should();

import {
    SET_LOGIN_STATUS,
    submitLogin
} from '../../src/actions/login';

describe('submitLogin async action', ()=>{
    const state = {
        login: {
            email: {value: 'test@test.com'},
            password: {value: 'asdQWE123'},
            valid: true,
        }
    };
    beforeEach(()=>{
        moxios.install();
    });
    afterEach(()=>{
        moxios.uninstall();
    });

    it('should set status to working',()=>{
        const dispatch = sinon.spy();
        submitLogin()(dispatch, ()=>state);
        const initAction = dispatch.getCall(0).args[0];
        initAction.should.have.property('type', SET_LOGIN_STATUS);
        initAction.should.have.property('status', 'working');
    });

    it('should set status to error and message if login failed', async ()=>{
        const dispatch = sinon.spy();
        submitLogin()(dispatch, ()=>state);
        await wait(5);
        let request = moxios.requests.mostRecent();
        await request.respondWith({
            status: 200,
            response: {
                status: 'error',
                message: 'Wrong email or password!'
            }
        });
        const resultAction = dispatch.getCall(1).args[0];
        resultAction.should.have.property('type', SET_LOGIN_STATUS);
        resultAction.should.have.property('status', 'error');
        resultAction.should.have.property('message', 'Wrong email or password!');
    });

    it('should set status to error and message if something goes wrong', async ()=>{
        const dispatch = sinon.spy();
        submitLogin()(dispatch, ()=>state);
        await wait(5);
        let request = moxios.requests.mostRecent();
        await request.respondWith({status: 500});
        const resultAction = dispatch.getCall(1).args[0];
        resultAction.should.have.property('type', SET_LOGIN_STATUS);
        resultAction.should.have.property('status', 'error');
        resultAction.should.have.property('message', 'Service temporarily unavailable!');
    });

    it('should set status to error and message if login succeed', async ()=>{
        const dispatch = sinon.spy();
        submitLogin()(dispatch, ()=>state);
        await wait(5);
        let request = moxios.requests.mostRecent();
        await request.respondWith({
            status: 200,
            response: {
                status: 'ok',
                message: 'Login successful!',
                user: {
                    id:0,
                    name: 'Agent Smith',
                    email: 'test@test.pl'
                }
            }
        });
        const resultAction = dispatch.getCall(1).args[0];
        resultAction.should.have.property('type', SET_LOGIN_STATUS);
        resultAction.should.have.property('status', 'ok');
        resultAction.should.have.property('message', 'Login successful!');
    });

    it('should set status to error immediately if form not valid',()=>{
        const dispatch = sinon.spy();
        state.login.valid = false;
        submitLogin()(dispatch, ()=>state);
        const resultAction = dispatch.getCall(0).args[0];
        resultAction.should.have.property('type', SET_LOGIN_STATUS);
        resultAction.should.have.property('status', 'error');
        resultAction.should.have.property('message', 'Form was not filled correctly!');
    });

    async function wait(s){
        return new Promise(ok=>setTimeout(() => ok(), s))
    }
});