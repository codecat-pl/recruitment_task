import * as actions from '../actions/login';

const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordValidationRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d\^$@!%*#?&]{6,}$/;

const field = (actionType, test, message)=>(state, action)=>{
    if(action.type === actionType) {
        const valid = Boolean(action.value.match(test));
        return {
            value: action.value,
            valid,
            message: valid?'':message
        };
    }
    return state;
};

export const emailReducer = field(actions.SET_LOGIN_EMAIL, emailValidationRegex, 'Email is not valid!');
export const passwordReducer = field(actions.SET_LOGIN_PASSWORD, passwordValidationRegex,
    'Password should have at least 6 characters with 1 big letter, 1 small letter and 1 digit.');

export const formReducer = (state, action)=>{
    switch(action.type){
        case actions.SET_LOGIN_REMEMBER:
            return {
                ...state,
                remember: action.value
            };
        case actions.SET_LOGIN_PASSWORD:
        case actions.SET_LOGIN_EMAIL:
            const password = passwordReducer(state.password, action);
            const email = emailReducer(state.email, action);
            return {
                ...state,
                password,
                email,
                valid: password && password.valid && email && email.valid
            };
        case actions.SET_LOGIN_STATUS:
            const {status, message} = action;
            return {
                ...state,
                status,
                message
            };
        default:
            return state;
    }
};

export default formReducer;