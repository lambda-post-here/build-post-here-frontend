import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//actions 
import { register } from '../actions';
//css
import '../css/Register.css';


class Register extends React.Component {
    state={
        username: '',
        password: ''
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state)
        .then(() => {
            alert('pushing to homepage');
            this.props.history.push("/home");
        })
    }

    render() {
        return (
            <div className="register">
                <h1 className="register-text">Register</h1>
                <hr />
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
                    <button className="register-button">Register</button>
                    <p>Already have an account?</p>
                    <NavLink className="link" to="/">*Login</NavLink>
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


export default connect(mapStateToProps, { register })(Register);