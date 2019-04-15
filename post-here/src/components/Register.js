import React from 'react';

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
    }

    render() {
        return (
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
                    requied
                >
                </input>
                <button>Register</button>
                <hr />
            </form>
        )
    }
}

export default Register;