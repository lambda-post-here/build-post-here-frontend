import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    state={
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

    }

    render() {
        return (
            <div>
                <Link to="/login">logout</Link>
                <h1>Find out where to post</h1>
                <form>
                    <textarea
                        onChange={this.handleChanges}
                        name="post"
                        placeholder='Reddit post'
                        required
                    >
                    </textarea>
                    <button>Send</button>
                    <hr />
                </form>
                {/* MAP SOME DATA */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, {})(Homepage);