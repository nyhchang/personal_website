import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Socials from './Socials';

/*Main design idea: AboutMe basically a part of the header, solid color.
  Work and Projects left and right cols. margin 10%.
  Socials on bottom. One page no scrolling design.
  Responsive collapses them to top bottom.
  Contact button = mailto
  Resume button = download
  Think about what else needs to be in nav bar, or if nav bar even necessary
  Could just remove navbar and put resume and contactme in socials.
  but contactme should definitely be larger.
*/

export default class Main extends Component {
  render() {
    return (
        <div id='main-content'>
          <About id='AboutMe' />
          <Work id='WorkHistory'/>
          <Projects id='Projects'/>
          <Socials id='SocialMedia'/>
        </div>
    )
  }
}