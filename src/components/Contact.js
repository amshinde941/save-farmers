import React, { Component } from "react";
import { Fade } from 'react-reveal';
import ContactUsForm from "./ContactUsForm";
import Social from "./Social";

class Contact extends Component {
  render() {
    return (
      <>
        <Fade bottom duration={2000} distance="100px">
          <div className="grid grid-cols-2">
            <ContactUsForm />
            <Social/>
          </div>
        </Fade>    </>
    );
  }
}
export default Contact;