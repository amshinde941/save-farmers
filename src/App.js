import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Approach from './components/Approach';
import Mission from './components/Mission';
import Problem from './components/Problem';
import Contact from './components/Contact';
import logo from './images/logo.png';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <img src={logo} alt="savefarmers"/>
          <li><a href="#home">Home</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#approach">Approach</a></li>
          <li><a href="#problem">Problem</a></li>
          <li><a href="#contactus">contact</a></li>
        </ul>
        <div className="content">
        <section id="home">
          <Home />
        </section>
        <section id="mission">
          <Mission/>
        </section>
        <section id="approach">
          <Approach/>
        </section>
        <section id="problem">
          <Problem/>
        </section>
        <section id="contactus">
          <Contact/>
        </section>
        </div>
        
        
      </div>
    );
  }
}

export default App;
