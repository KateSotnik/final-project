import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NAV_LINK_CAPTURED, NAV_LINK_HOME, NAVBAR_NAME } from './../constants';

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="primary" variant="dark" className = "navBarBody">
      <LinkContainer to="/"> 
        <Navbar.Brand href="/"> <div className = "navbarName"><h3>{NAVBAR_NAME}</h3></div>
        </Navbar.Brand>     
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>{NAV_LINK_HOME}</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/caught">
          <Nav.Link>{NAV_LINK_CAPTURED}</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
