import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/Homepage.css';
//components
import SubReddit from './SubReddit';
//actions 
import { getData, deleteAccount, updatePassword } from '../actions';


class Homepage extends React.Component {
    state={
        title: '',
        body: '',
        password: '',
        image: 'images bro'
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    analyzeData = (e) => {
        e.preventDefault();
        //action to call api
        this.props.getData(this.state);
        console.log(this.props.data);
    }

    updatePassword = (e) => {
        e.preventDefault();
        let password = {password: this.state.password}
        this.props.updatePassword(password)
        .then(this.props.history.push('/'));
    }

    deleteAccount = (e) => {
        e.preventDefault();
        //action to call api
        this.props.deleteAccount()
        .then(() => {
            this.removeStorage();
            this.props.history.push('/register');
        })
    }

    removeStorage = () => {
        localStorage.clear();
    }

    logOut = (e) => {
        e.preventDefault();
        this.removeStorage();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="homepage-form">
                <h1 className="homepage-text">Find out where to post</h1>
                <form onSubmit={this.analyzeData}>
                    <hr />
                    <input
                        onChange={this.handleChanges}
                        placeholder="Enter your title..."
                        name="title"
                        value={this.state.title}
                        className="title-input"
                        required
                    >
                    </input>
                    <textarea
                        onChange={this.handleChanges}
                        name="body"
                        placeholder='Your Reddit post...'
                        value={this.state.body}
                        className="text-area"
                        required
                    >
                    </textarea>
                    <button className="send-button">Analyze</button>
                </form>
                <div className="subReddit">
                    {this.props.data && <SubReddit />}
                </div>
                <form onSubmit={this.updatePassword}>
                    <input 
                        onChange={this.handleChanges}
                        placeholder="Enter your new password..."
                        name="password"
                        value={this.state.password}
                        className="title-input"
                        required
                    >
                    </input>
                    <button onClick={this.updatePassword} className="update-button">Update Password</button>
                </form>
                <button onClick={this.deleteAccount} className="delete-button">Delete Account</button>
                <div>
                    <NavLink onClick={this.logOut} className="logout-link" to="/">*Logout</NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        ...state,
        data: state.data
    }
}

export default connect(mapStateToProps, { getData, deleteAccount, updatePassword })(Homepage);