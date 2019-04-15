import React from 'react';

const Register = () => {
    return (
        <form>
            <input
                placeholder="username"
                name="username"
            >
            </input>
            <input
                placeholder="password"
                name="password"
            ></input>
            <button>Register</button>
        </form>
    )
}

export default Register;