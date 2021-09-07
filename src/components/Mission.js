import React, { Component } from "react";
import {Fade} from 'react-reveal';
import './Combined.css';
class Mission extends Component {
  render() {
    return (
    <div className="mission">
      <Fade bottom duration={2000} distance="100px">
      <h1>Mission</h1>
      </Fade>
    </div>
    );
  }
}
export default Mission;