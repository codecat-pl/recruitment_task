import React from "react";
import {mount, shallow} from "enzyme";
import chai from "chai";

chai.should();
import Login from "../../src/components/login";
import LoginForm from "../../src/elements/login_form";

describe('<Login/>', ()=>{
    it('should display logo',()=>{
        const Element = shallow(<Login />);
        Element.find('img.logo').exists().should.equal(true);
    })
    it('should display LoginForm',()=>{
        const Element = shallow(<Login />);
        Element.find(LoginForm).exists().should.equal(true);
    })
});
