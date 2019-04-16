import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={(props) => (
        localStorage.getItem('token') === true ?
        (<Component {...props} />) :
        (<Redirect to='/login' />)
    )}/>
)

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, {})(PrivateRoute);