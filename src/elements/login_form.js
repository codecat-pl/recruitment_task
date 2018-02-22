import React, {Component} from 'react';
import EmailInput from './email_input';
import PasswordInput from './password_input';
import RememberMe from './rememberme';
import SubmitButton from './submit_button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {setLoginEmail, setLoginPassword, setLoginRemember, submitLogin} from "../actions/login";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export class LoginForm extends Component{
    constructor(props){
        super(props);
    }
    submit(ev){
        const {submitLogin} = this.props;
        ev.stopPropagation();
        ev.preventDefault();
        submitLogin();
    }
    render(){
        const {setLoginEmail, setLoginPassword, setLoginRemember} = this.props;
        const {email, password, remember,message, status} = this.props.data;

        return (
            <div className="login-form-container">
                <form method="POST" action="" ref="form" className="login-form">
                    <fieldset>
                        <EmailInput {...email} name='email' onChange={mail=>setLoginEmail(mail)} />
                        <PasswordInput {...password} name='password' onChange={pass=>setLoginPassword(pass)} />
                        <RememberMe toggled={remember} onChange={val=>setLoginRemember(val)} />
                        <SubmitButton status={status} onClick={ev=>this.submit(ev)} />
                    </fieldset>
                </form>
                <div className="message">{message}</div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    data: PropTypes.shape({
        email: PropTypes.shape({
            value: PropTypes.string,
            valid: PropTypes.bool,
            message: PropTypes.string
        }),
        password: PropTypes.shape({
            value: PropTypes.string,
            valid: PropTypes.bool,
            message: PropTypes.string
        }),
        valid: PropTypes.bool,
        message: PropTypes.string
    }),
    setLoginEmail: PropTypes.func.isRequired,
    setLoginPassword: PropTypes.func.isRequired,
    setLoginRemember: PropTypes.func.isRequired,
    submitLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        data: state.login
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setLoginEmail: email => dispatch(setLoginEmail(email)),
        setLoginPassword: pass => dispatch(setLoginPassword(pass)),
        setLoginRemember: rem => dispatch(setLoginRemember(rem)),
        submitLogin: () => dispatch(submitLogin())
    }
};

const ConnectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default ConnectedLoginForm;