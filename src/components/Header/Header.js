import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import recycleImage from "../../assets/images/recycle.png";
import "../../styles/Header.css";

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container className="navbar">
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <img
            src={recycleImage}
            alt="Recycle"
            style={{ width: "50px", height: "50px" }}
          />
          <span>Tech for Diversity</span>
        </Navbar.Brand>
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
      </Container>
    </Navbar>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/donate">Donate</Link>
    //     </li>
    //     <li>
    //       <Link to="/request">Request</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Header;
