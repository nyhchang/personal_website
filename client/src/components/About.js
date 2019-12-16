import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <div className='About'>
          <h1>Nathan Chang</h1>
          <p>Up and coming web developer, building useful, functional, and compact websites.</p>
          <ul>
            <li className='location'>Location: <span>California Bay Area</span></li>
            <li className='languages'>Languages:
              <ul>
                <li>Fluent: HTML, CSS, js</li>
                <li>Some experience: React, Node, python</li>
                <li>Dabbled in: PHP, C#</li>
              </ul>
            </li>
          </ul>
        </div>
    )
  }
}