//actions 
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions';

//The source of all truth
const initialState = {
    data: [],
    fetchingData: false,
    isLoggedIn: false,
    error: '',
    token: ''
}

//Reducer
export const rootReducer = (state=initialState, action) => {
    //switch statement
    switch(action.type) {
        case REGISTER_START:
        return {
            ...state,
            fetchingData: true,
            token: action.payload
        }
        case REGISTER_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            isLoggedIn: true
        }
        case REGISTER_FAIL:
        return {
            error: 'Register Failed'
        }
        case LOGIN_START:
        return {
            ...state,
            fetchingData: true, 
            token: action.payload
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            isLoggedIn: true
        }
        case LOGIN_FAIL:
        return {
            error: 'Login failed'
        }
        default: return state;
    }
}