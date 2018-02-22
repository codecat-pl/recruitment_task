import React from "react";
import {mount, shallow} from "enzyme";
import chai from "chai";
import sinon from 'sinon';
chai.should();
import EmailInput from "../../src/elements/email_input";
import PasswordInput from "../../src/elements/password_input";

describe('<EmailInput/>', ()=>testCommon(EmailInput));
describe('<PasswordInput/>', ()=>{
    testCommon(PasswordInput)

    const props = {
        value:'asd',
        name:'name',
        onChange:()=>{},
        message:"Test message",
        valid:false
    };
    it('should show password if "show password" is clicked', ()=>{
        const input = shallow(<PasswordInput {...props} />);
        input.find('.show').simulate('click');
        input.find('input').prop('type').should.equal('text');
    });
    it('should hide password if "hide password" is clicked', ()=>{
        const input = shallow(<PasswordInput {...props} />);
        input.find('.show').simulate('click');
        input.find('.hide').simulate('click');
        input.find('input').prop('type').should.equal('password');
    });
});

function testCommon(Element){
    let changeSpy, standardProps;
    beforeEach(()=>{
        changeSpy = sinon.spy();
        standardProps = {
            value:'asd',
            name:'name',
            onChange:changeSpy,
            message:"Test message",
            valid:false
        };
    });

    it('should display message',()=>{
        const input = shallow(<Element {...standardProps}/>);
        input.find('.message').html().should.contain("Test message");
    });

    it('should have input',()=>{
        const input = shallow(<Element {...standardProps}/>);
        input.find('input').should.have.length(1);
    });

    it('should have error class if input is not valid',()=>{
        const input = shallow(<Element {...standardProps}/>);
        input.find('.error').should.have.length(1);
    });
    it('should not have error class if input is valid',()=>{
        standardProps.valid = true;
        const input = shallow(<Element {...standardProps}/>);
        input.find('.error').should.have.length(0);
    });
    it('should call onChange if input change',()=>{
        const input = mount(<Element {...standardProps}/>);
        const form = input.find('input').first();
        form.simulate('change', {target: {value: 'agent'}});
        changeSpy.calledOnce.should.equal(true);
        changeSpy.getCall(0).args[0].should.equal('agent');
    });
    it('should change input value when value prop changes',()=>{
        const input = mount(<Element {...standardProps}/>);
        input.setProps({value: 'zxc', onChange: changeSpy, message: '', valid: true});
        input.update();
        const form = input.find('input').first();
        form.prop('value').should.equal('zxc');
    });
}


