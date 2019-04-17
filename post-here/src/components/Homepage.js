import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/Homepage.css';
import styled from 'styled-components';
//actions 
import { getData } from '../actions';


class Homepage extends React.Component {
    state={
        title: '',
        post: ''
    }


    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //action to call api
        this.props.getData(this.state)
    }

    render() {
        return (
            <div className="homepage-form">
                <h1 className="homepage-text">Find out where to post</h1>
                <form onSubmit={this.handleSubmit}>
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
                        name="post"
                        placeholder='Reddit post'
                        value={this.state.post}
                        className="text-area"
                        required
                    >
                    </textarea>
                    <button className="send-button">Send</button>
                    <div>
                        <NavLink className="link" to="/">*Logout</NavLink>
                    </div>
                </form>
                {/* MAP SOME DATA */}
                {console.log(this.props.data)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, { getData })(Homepage);