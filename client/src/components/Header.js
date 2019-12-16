import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavLink} from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar id='mainNav' color='dark' expand='sm'>
        <Nav id='sidebar' className='ml-auto'>
          <NavItem>
            <NavLink href='#'>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Resume</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}