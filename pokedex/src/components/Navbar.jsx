import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      {/* <LinkContainer to="/">
        <Navbar.Brand href="/">
          <img
            src={pokeball}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="test"
          />
        </Navbar.Brand>
      </LinkContainer> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/caught">
            <Nav.Link>Caught</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
