import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../App.css'

const header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>Restaurant-Finder</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"> 
    <LinkContainer to="/showAllUsers"><Nav.Link>Show All User</Nav.Link></LinkContainer>
    <LinkContainer to="/addUser"><Nav.Link>Add User</Nav.Link></LinkContainer>
    <LinkContainer to="/showActiveSession"><Nav.Link>Show Active Session</Nav.Link></LinkContainer>
    <LinkContainer to="/createSession"><Nav.Link>Create Session</Nav.Link></LinkContainer>
    <LinkContainer to="/showSessionUser"><Nav.Link>Show Session User</Nav.Link></LinkContainer>
    <LinkContainer to="/joinSession"><Nav.Link>Join Session</Nav.Link></LinkContainer>
    <LinkContainer to="/addRestaurant"><Nav.Link>Add Restaurant</Nav.Link></LinkContainer>
    <LinkContainer to="/terminateActiveSession"><Nav.Link>Terminate Active Session</Nav.Link></LinkContainer>
    <LinkContainer to="/showSelectedRestaurant"><Nav.Link>Show All Selected Restaurant</Nav.Link></LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default header