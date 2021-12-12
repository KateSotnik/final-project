import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import pokeball from '../static/icons8-pokeball-96.png';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand href="/">
          <img
            src={pokeball}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="test"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/captured">
            <Nav.Link>Captured</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

