import axios from 'axios';

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const setLoginEmail = email=>({
    type: SET_LOGIN_EMAIL,
    value: email
});

export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const setLoginPassword = pass=>({
    type: SET_LOGIN_PASSWORD,
    value: pass
});

export const SET_LOGIN_REMEMBER = 'SET_LOGIN_REMEMBER';
export const setLoginRemember = rem=>({
    type: SET_LOGIN_REMEMBER,
    value: rem
});

export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const setLoginStatus = (status, message)=>({
    type: SET_LOGIN_STATUS,
    status,
    message
});


export const submitLogin = rem=>(dispatch, getState)=>{
    const {login} = getState();
    if(!login.valid){
        dispatch(setLoginStatus('error','Form was not filled correctly!'));
        return;
    }
    dispatch(setLoginStatus('working'));
    axios.post('/login', {
        email: login.email.value,
        password: login.password.value
    })
        .then(function (res) {
            const {status, message} = res.data;
            dispatch(setLoginStatus(status, message));
        })
        .catch(function (error) {
            dispatch(setLoginStatus('error', 'Service temporarily unavailable!'));
        });
};


