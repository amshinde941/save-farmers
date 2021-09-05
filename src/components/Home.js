import React, { Component } from "react";
import {Fade} from 'react-reveal';
class Home extends Component {
  render() {
    return (
      <>
        <Fade bottom duration={2000} distance="100px">
          <h1>Home</h1>
        </Fade>    </>
    );
  }
}
export default Home;