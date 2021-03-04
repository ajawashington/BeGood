import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { LogOut, signInWithGoogle } from "../firebase";
import logo from "./imgs/logo.jpg";

export default (props) => {
  const currentUser = [user, setUser]

  return (  
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="logo"
          width="80"
          height="80"
          className="d-inline-block align-top"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/donors">Donations</Nav.Link>
          <Nav.Link href="/businesses">Business Partners</Nav.Link>
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/pending">Pending Requests</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="request">
            Create Charity Request
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/" onClick={LogOut}>
            Logout
          </Nav.Link>
          <Nav.Link href="/" onClick={signInWithGoogle}>
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
