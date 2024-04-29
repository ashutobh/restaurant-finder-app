import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'


function Header11() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Restaurant-Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Session" id="collapsible-nav-dropdown">
              <NavDropdown.Item tag={Link} to="/createSession">Create Session</NavDropdown.Item>
              <NavDropdown.Item tag={Link} to="/showActiveSession">Show Active Session</NavDropdown.Item>
              <NavDropdown.Item tag={Link} to="/terminateActiveSession">Terminate Active Session</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="User" id="collapsible-nav-dropdown">
              <NavDropdown.Item tag={Link} to="/showAllUsers">Show All User</NavDropdown.Item>
              <NavDropdown.Item tag={Link} to="/showSessionUser">Show Session User</NavDropdown.Item>
              <NavDropdown.Item tag={Link} to="/addUser">Add User</NavDropdown.Item>
              <NavDropdown.Item tag={Link} to="/joinSession">Join User to Session</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Restaurant" id="collapsible-nav-dropdown">
              <NavDropdown.Item tag={Link} to="/addRestaurant">Add Restaurant</NavDropdown.Item>
              <NavDropdown.Item tag={Link} to="/showSelectedRestaurant">Show Selected Restaurant</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header11;