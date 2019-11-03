import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';
import Socials from './Socials';

export default class Main extends Component {
  render() {
    return (
        <div id='main-content'>
          <About />
          <Work />
          <Projects />
          <Contact />
          <Socials />
        </div>
    )
  }
}