import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import recycleImage from "../../assets/images/recycle.png";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" fixed="top">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <img
            src={recycleImage}
            alt="Recycle"
            style={{ width: "50px", height: "50px" }}
          />
          <span>Tech for Diversity</span>
        </Navbar.Brand>
        <div>
          <Navbar.Collapse id="navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/donate">
                Donate
              </Nav.Link>
              <Nav.Link as={Link} to="/request">
                Request
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="navbar-nav" />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
