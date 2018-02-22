import React from "react";
import {mount, shallow} from "enzyme";
import chai from "chai";
import sinon from 'sinon';
chai.should();
import EmailInput from "../../src/elements/email_input";
import PasswordInput from "../../src/elements/password_input";
import RememberMe from "../../src/elements/rememberme";
import SubmitButtom from "../../src/elements/submit_button";
import {LoginForm} from "../../src/elements/login_form";

describe('<LoginForm/>', ()=>{

    it('should contain email input', ()=>{
        const {emailInput} = setup();
        emailInput.exists().should.equal(true);
    });
    it('should contain password input', ()=>{
        const {passwordInput} = setup();
        passwordInput.exists().should.equal(true);
    });
    it('should distribute form data to email input', ()=>{
        const {emailInput} = setup();
        emailInput.prop('value').should.equal('asd@asd.pl');
        emailInput.prop('valid').should.equal(true);
        emailInput.prop('message').should.equal('email test');
    });
    it('should distribute form data to password input', ()=>{
        const {passwordInput} = setup();
        passwordInput.prop('value').should.equal('qweASD123');
        passwordInput.prop('valid').should.equal(true);
        passwordInput.prop('message').should.equal('password test');
    });

    it('should call setLoginEmail when email change', ()=>{
        const {emailInput, setLoginEmail} = setup();
        emailInput.prop('onChange')('test');
        setLoginEmail.withArgs('test').calledOnce.should.equal(true);
    });

    it('should call setLoginPassword when password change', ()=>{
        const {passwordInput, setLoginPassword} = setup();
        passwordInput.prop('onChange')('test');
        setLoginPassword.withArgs('test').calledOnce.should.equal(true);
    });

    it('should call submitLogin when login button clicked', ()=>{
        const {submitButton, submitLogin} = setup();
        const preventDefault = sinon.spy();
        const stopPropagation = sinon.spy();
        submitButton.simulate('click',{stopPropagation, preventDefault});
        submitLogin.calledOnce.should.equal(true);
        preventDefault.calledOnce.should.equal(true);
        stopPropagation.calledOnce.should.equal(true);
    });
});


function setup(statePatch = {}){
    const actions = {
        setLoginEmail: sinon.spy(),
        setLoginPassword: sinon.spy(),
        setLoginRemember: sinon.spy(),
        submitLogin: sinon.spy()
    };

    const state = Object.assign({
        email: {value: 'asd@asd.pl', valid: true, message: 'email test'},
        password: {value: 'qweASD123', valid: true, message: 'password test'}
    }, statePatch);

    const Element = shallow(<LoginForm data={state} {...actions}/>);

    return {
        Element,
        ...actions,
        state,
        passwordInput: Element.find(PasswordInput),
        emailInput: Element.find(EmailInput),
        submitButton: Element.find(SubmitButtom),
        rememberMe: Element.find(RememberMe),
        form: Element.find('.login-form'),
    }
}