import React, {Component} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSquare from '@fortawesome/fontawesome-free-regular/faSquare';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
class RememberMe extends Component{

    check(){
        if(this.props.toggled){
            return <FontAwesomeIcon icon={faCheck} transform="grow-1" color="#4285f4"/>;
        }
        return null;
    }

    render(){
        const {onChange} = this.props;
        return (
            <div className="remember" onClick={ev=>onChange(!this.props.toggled)}>
                <span className="fa-layers fa-fw login-remember-checkbox">
                    <FontAwesomeIcon icon={faSquare}/>
                    {this.check()}
                </span>
                Remember me
            </div>
        );
    }
}

RememberMe.propTypes = {
    toggled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};


export default RememberMe;