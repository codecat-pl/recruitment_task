import React, {Component} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
class SubmitButton extends Component{

    content(){
        switch(this.props.status){
            case 'error':
                return <FontAwesomeIcon icon={faTimes} />;
            case 'ok':
                return <FontAwesomeIcon icon={faCheck} />;
            case 'working':
                return <FontAwesomeIcon icon={faSpinner} spin />;
            default:
                return "login"
        }
    }

    render(){
        const {onClick, status} = this.props;
        return (
            <div className={cn("login-button", status)} onClick={ev=>onClick(ev)}>
                {this.content()}
            </div>
        );
    }
}

SubmitButton.propTypes = {
    status: PropTypes.string,
    onClick: PropTypes.func
};


export default SubmitButton;