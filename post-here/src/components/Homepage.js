import React from 'react';

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
                <h1>Find out where to post</h1>
                <form>
                    <input
                        onChange={this.handleChanges}
                        name="post"
                        placeholder='Reddit post'
                        required
                    >
                    </input>
                    <button>Send</button>
                    <hr />
                </form>
                {/* MAP SOME DATA */}
            </div>
        )
    }
}

export default Homepage;