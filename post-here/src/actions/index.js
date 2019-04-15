import axios from 'axios';
//registering
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
//log-in
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
//logout 
export const LOGOUT = 'LOGOUT'
//actions
export const register = (credentials) => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios.post('', credentials)
        .then((res) => {
            console.log(res);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: REGISTER_FAIL });
        })
}

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    axios.post('', credentials)
        .then((res) => {
            console.log(res);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL });
        })
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
    
}