import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine
  } from 'recharts';
//css
import '../css/SubReddit.css';

class SubReddit extends PureComponent {
  render() {
        //console.log(this.props);
        return (
            <div>
                {this.props.data.map((data) => {
                    const round = `${Math.round((data.score) * 100)}`;
                    const theData = {score: 'percentage', percentage: round, max: 100}
                    //console.log(theData);
                    return (
                        <div key={Date.now()}>
                            <hr />
                            <a className="reddit-link" target="_blank" href={`https://www.reddit.com/r/${data.rec}`}>{`r/${data.rec}`}</a>
                            <p className="percentage">{`${round}% Match`}</p>
                            <div id="container">
                                <BarChart
                                    width={300}
                                    height={300}
                                    data={[theData]}
                                    margin={{top: 5, right: 50, left: 120, bottom: 5}}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="score" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    {/* <ReferenceLine y={50} stroke="#000" /> */}
                                    <Bar dataKey='percentage' stackId="a" fill="red" />
                                    <Bar dataKey="max" stackId="a" fill="#82ca9d" />
                                </BarChart>
                            </div>
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