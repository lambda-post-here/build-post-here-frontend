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
//get-data
export const GET_DATA = 'GET_DATA';
//update 
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
//actions

export const register = (credentials) => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios.post(`${URL}/api/auth/register`, credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: REGISTER_FAIL, payload: err.data.message });
        })
}

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    return axios.post(`${URL}/api/auth/login`, credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL,  payload: err.data.message })
        })
}

export const getData = (credentials) => dispatch => {
    dispatch({ type: GET_DATA});
    return axios.get('/api/post', credentials)
        .then((res) => {
            console.log(res);
            dispatch({ type: GET_DATA, payload: res.data });
        })
}

export const logout = (credentials) => dispatch => {
    dispatch({ type: LOGOUT });
    return axios.put(`${URL}/api/auth/logout`, credentials)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}