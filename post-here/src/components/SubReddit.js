import React from 'react';
import { connect } from 'react-redux';

class SubReddit extends React.Component {

  render() {
        console.log(this.props);
        return (
            <div>
                {this.props.data.map((data) => {
                    return (
                        <div key={Date.now()}>
                            <h1>{data.rec}</h1>
                            <p>{data.score}</p>
                        </div>
                    )
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