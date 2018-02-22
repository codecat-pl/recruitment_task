
import Login from './login';

export default (state, action) => {
    return {
        login: Login(state.login, action)
    }
}