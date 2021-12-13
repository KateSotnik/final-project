import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NAV_LINK_CAPTURED, NAV_LINK_HOME, NAVBAR_NAME } from './../constants';

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="primary" variant="dark" className = "navBarBody">
      <LinkContainer to="/"> 
        <Navbar.Brand href="/"> <div className = 'navbarName'><h3>{NAVBAR_NAME}</h3></div>
          {/* <img
            src= 'https://pngimg.com/uploads/pokeball/pokeball_PNG8.png'
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="test"
          /> */}
        </Navbar.Brand>     
      </LinkContainer>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>{NAV_LINK_HOME}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/caught">
            <Nav.Link>{NAV_LINK_CAPTURED}</Nav.Link>
          </LinkContainer>
        </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};
export default NavBar;
