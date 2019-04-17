import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/Homepage.css';
//components
import SubReddit from './SubReddit';
//actions 
import { getData, deleteAccount } from '../actions';


class Homepage extends React.Component {
    state={
        title: '',
        body: ''
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

    deleteAccount = (e) => {
        e.preventDefault();
        //action to call api
        this.props.deleteAccount()
        .then(() => {
            this.props.history.push('/register');
        })
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
                <button className="update-button">Update Password</button>
                <button onClick={this.deleteAccount} className="delete-button">Delete Account</button>
                <div>
                    <NavLink className="link" to="/">*Logout</NavLink>
                </div>
                {this.props.data !== [] ? <SubReddit /> : null}
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

export default connect(mapStateToProps, { getData, deleteAccount })(Homepage);