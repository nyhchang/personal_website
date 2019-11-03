import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar id='mainNav' color='dark' expand='sm'>
        <NavbarBrand id='mainName'>Nathan Chang</NavbarBrand>
        <Nav id='sidebar' className='ml-auto'>
          <NavItem>
            <NavLink href='#'>About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Projects</NavLink>
          </NavItem>
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