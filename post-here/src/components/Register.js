import React from 'react';
import { connect } from 'react-redux';
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
            this.props.history.push('/home');
        })
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
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
                    <hr />
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