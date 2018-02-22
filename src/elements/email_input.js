import React, {Component} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

class EmailInput extends Component{
    render(){
        const {value, onChange, valid, message, name} = this.props;
        return (
            <div className={cn("email-input", {error: !valid})}>
                <label htmlFor={name}>
                    Email:
                </label>
                <input value={value}
                       name={name}
                       onChange={ev=>onChange(ev.target.value)}/>
                <div className="message">{message}</div>
            </div>
        );
    }
}

EmailInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    valid: PropTypes.bool,
    message: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

EmailInput.defaultProps = {
    valid: true,
    message: ''
};

export default EmailInput;