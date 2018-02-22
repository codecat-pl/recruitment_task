import React, {Component} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

class PasswordInput extends Component{
    constructor(props){
        super(props);
        this.state = {show: false};
    }
    show(){
        this.setState({show: !this.state.show});
    }
    render(){
        const {value, onChange, valid, message, name} = this.props;
        return (
            <div className={cn("password-input", {error: !valid})}>
                <label htmlFor={name}>
                    Password:
                </label>
                <input value={value}
                       type={this.state.show?'text':'password'}
                       name={name}
                       onChange={ev=>onChange(ev.target.value)}/>
                <div className={cn({hide: this.state.show, show: !this.state.show})} onClick={()=>this.show()}/>
                <div className="message">{message}</div>
            </div>
        );
    }
}

PasswordInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    valid: PropTypes.bool,
    message: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

PasswordInput.defaultProps = {
    valid: true,
    message: ''
};

export default PasswordInput;