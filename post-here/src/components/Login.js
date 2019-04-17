import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//actions  
import { login } from '../actions';
//css
import '../css/Login.css';

class Login extends React.Component {
    state={
        username: 'user',
        password: 'pass'
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(this.state);
        this.props.login(this.state)
        .then(() => {
            console.log(this.props)
            console.log(this.props.token);
            this.props.history.push('/home');
        })
    }

    render() {
        return (
            <div className="login">
                <h1 className="login-text">Login</h1>
                <hr/>
                <form onSubmit={this.handleSubmit} className="form">
                    <input 
                        onChange={this.handleChanges}
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        className="input"
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        className="input"
                        required
                    >
                    </input>
                    <button className="login-button">Login</button>
                    <p>Don't have an account?</p>
                    <NavLink className="link" to="/register">*Register</NavLink>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state, 
    }
}

export default connect(mapStateToProps, { login })(Login);