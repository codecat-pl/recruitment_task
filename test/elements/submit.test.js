import React from "react";
import {mount, shallow} from "enzyme";
import chai from "chai";
import sinon from 'sinon';
chai.should();

import SubmitButton from "../../src/elements/submit_button";

describe('<SubmitButton/>', ()=>{
    it('should call onChange when clicked', ()=>{
        const {Element,onClick} = setup();
        Element.simulate('click');
        onClick.calledOnce.should.equal(true);
    });
    it('should add class error for relative status', ()=>{
        const {Element,onClick} = setup('error');
        Element.find('.error').exists().should.equal(true);
    });
    it('should add class ok for relative status', ()=>{
        const {Element,onClick} = setup('ok');
        Element.find('.ok').exists().should.equal(true);
    });
    it('should add class working for relative status', ()=>{
        const {Element,onClick} = setup('working');
        Element.find('.working').exists().should.equal(true);
    });
});


function setup(status){

    const actions = {
        onClick: sinon.spy()
    };

    const Element = shallow(<SubmitButton {...actions} status={status}/>);

    return {
        Element,
        ...actions
    }
}