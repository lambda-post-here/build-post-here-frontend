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
                            <a target="_blank" href={`https://www.reddit.com/r/${data.rec}`}>{`r/${data.rec}`}</a>
                            <p>{`${Math.round((data.score) * 100)}% Match`}</p>
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