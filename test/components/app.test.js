import React from "react";
import {mount, shallow} from "enzyme";
import chai from "chai";
import sinon from 'sinon';
chai.should();
import App from "../../src/components/app";
import Login from "../../src/components/login";

describe('<App/>', ()=>{
    it('should create Login page',()=>{
        const Element = shallow(<App />);
        Element.find(Login).exists().should.equal(true);
    })
});
