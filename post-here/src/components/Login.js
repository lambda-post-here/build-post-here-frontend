import React from 'react';
import { connect } from 'react-redux';
//actions  
import { login } from '../actions';
import styled from 'styled-components';
//styled-components


class Login extends React.Component {
    state={
        username: 'user',
        password: 'pass'
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(this.state);
        this.props.login(this.state);

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChanges}
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        required
                    >
                    </input>
                    <input
                        onChange={this.handleChanges}
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        required
                    >
                    </input>
                    <button>Login</button>
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

export default connect(mapStateToProps, { login })(Login);