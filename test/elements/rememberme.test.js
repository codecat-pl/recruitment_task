import React from "react";
import {mount, shallow} from "enzyme";
import chai from "chai";
import sinon from 'sinon';
chai.should();

import RememberMe from "../../src/elements/rememberme";

describe('<RememberMe/>', ()=>{
    it('should call onChange when clicked', ()=>{
        const {Element, onChange} = setup();
        Element.find('.remember').simulate('click');
        onChange.calledOnce.should.equal(true);
    })
});


function setup(){
    const actions = {
        onChange: sinon.spy()
    };

    const Element = shallow(<RememberMe toggled={false} {...actions}/>);

    return {
        Element,
        ...actions
    }
}