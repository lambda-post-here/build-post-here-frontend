import axios from 'axios';
const URL = 'https://post-here.herokuapp.com'
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
    return axios.post(`${URL}/api/auth/register`, credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: REGISTER_FAIL });
        })
}

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    return axios.post(`${URL}/api/auth/login`, credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL });
        })
}

export const logout = (credentials) => dispatch => {
    dispatch({ type: LOGOUT });
    axios.put('', credentials)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}