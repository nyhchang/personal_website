import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar id='mainNav' color='dark' expand='sm'>
        <NavbarBrand id='mainName'>Nathan Chang</NavbarBrand>
        <Nav id='sidebar' className='ml-auto'>
          <NavItem>
            <NavLink>About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Resume</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}