import React, { Component } from "react";
import {Fade} from 'react-reveal';
class Problem extends Component {
    render() {
        return (
            <>
                <Fade bottom duration={2000} distance="100px">
                    <h1>Problem</h1>
                </Fade>    </>
        );
    }
}
export default Problem;