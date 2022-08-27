import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

function MainNav() {
  return (
    <Navbar bg="light" expand="lg" className="py-4">
      <Container>
        <Navbar.Brand href="#home">Thyme-Out</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-fill">
            <Nav.Link href="#home" aria-current="page">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Meal Plans</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link>
              <FontAwesomeIcon icon={faSearch} size="1x" />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            <Nav.Link href="#link">Sign in</Nav.Link>
            <button className="btn btn-lg btn-danger rounded-pill">
              Create Account
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
