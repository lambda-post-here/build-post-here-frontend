import React from 'react';
import Transition from'react-transition-group/Transition';

export default class FadeTransition extends React.Component {
    constructor(props) {
        super(props);
        //Default Style
        this.defaultStyle = {
            "opacity" : "0",
        };
        this.transitionStyle = {
            entering: {
                "opacity" : "1"
            },
            entered: {

            },
            exiting: {

            },
            exited: {

            }
        };
    }
    render() {
        return (
            <Transition 
                in={true}
                timeout={1000}
            >
            
            </Transition>
        )
    }
}