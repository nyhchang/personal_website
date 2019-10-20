import React, { Component } from 'react';
import { Nav, Button, Navbar, NavbarBrand } from 'reactstrap';
import NavItem from 'reactstrap/es/NavItem';
import NavLink from 'reactstrap/es/NavLink';

export default class Header extends Component {
  render() {
    return (
      <Navbar color='light' expand='sm'>
        <NavbarBrand>Nathan Chang</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>Main</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact Me</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}