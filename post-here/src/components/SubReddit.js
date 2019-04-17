import React from 'react';
import { connect } from 'react-redux';

class SubReddit extends React.Component {

  render() {
        console.log(this.props);
        return (
            <div>
                {this.props.data.map((data) => {
                    return <h1>hello</h1>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        ...state,
        data: state.data
    }
}

export default connect(mapStateToProps, {})(SubReddit);