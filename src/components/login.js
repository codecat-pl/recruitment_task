import LoginForm from '../elements/login_form';

import React, {Component} from 'react';

export default class Login extends Component{
    render(){
        return (
            <div id="login-container">
                <img className="logo" src="assets/logo.png" alt="CodeCat"/>
                <LoginForm />
            </div>
        );
    }
}