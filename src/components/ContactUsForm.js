import React, { useState } from "react";
import './Combined.css';
const ContactUsForm = () => {

  const [name, setName] = useState()

  return (
    <>
      <h2 style={{padding:"5px"}}>
        Send Us A Message
      </h2>
      <div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            value={name}
            label="Name"
            placeholder="Name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            value={name}
            label="Email"
            placeholder="Email"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div style={{padding:"5px"}}>
          <input
            className="input"
            value={name}
            label="Your Message"
            placeholder="Your Message"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div style={{padding:"5px"}}>
          <button style={{width:"100px", height:"30px", borderRadius:"5px", backgroundColor:"green", color:"white"}}>submit</button>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
