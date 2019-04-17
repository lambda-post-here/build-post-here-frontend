import { bindActionCreators } from "redux";


//actions 
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_DATA,
    GET_DATA_SUCCESS
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
            error: action.payload
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
            isLoggedIn: true,
            token: action.payload
        }
        case LOGIN_FAIL:
        return {
            error: action.payload
        }
        case GET_DATA:
        return {
            ...state, 
            fetchingData: true,
            isLoggedIn: true
        }
        case GET_DATA_SUCCESS: 
        return {
            ...state,
            fetchingData: false,
            data: action.payload
        }
        default: return state;
    }
}