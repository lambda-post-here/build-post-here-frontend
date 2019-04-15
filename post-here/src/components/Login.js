import React from 'react';
//actions  

class Login extends React.Component {
    state={
        username: '',
        paddword: ''
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //call action with auth token
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
                    required
                >
                </input>
                <button>Login</button>
                <hr />
            </form>
        )
    }
}

export default Login;