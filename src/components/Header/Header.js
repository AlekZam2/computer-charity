import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import recycleImage from "../../assets/images/recycle.png";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <img
            src={recycleImage}
            alt="Recycle"
            style={{ width: "50px", height: "50px" }}
          />
          <span>Tech for Diversity</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggleClick} />
        <Navbar.Collapse id="navbar-nav" in={isMenuOpen}>
          <Nav className="d-flex flex-column flex-lg-row gap-3  mb-4 mb-lg-0 align-items-start">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === "/"}
              onClick={handleLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/donate"
              active={location.pathname === "/donate"}
              onClick={handleLinkClick}
            >
              Donate
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/request"
              active={location.pathname === "/request"}
              onClick={handleLinkClick}
            >
              Request
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
