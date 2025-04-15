import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import MapComponent from "../MapComponent/MapComponent";
import ContactForm from "../Forms/ContactForm";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <h3 className="footer-slogan text-center">
        <span>Tech for Diversity.</span> Empowering communities - one device at
        a time.
      </h3>
      <Container className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>Contact Us</h2>
            <p>Have questions? Reach out to us!</p>
          </Col>
        </Row>

        <Row className="justify-content-center flex-wrap">
          <Col lg={6} sm={12} className="mb-4">
            <div className="mb-4">
              <h4>Our Contact Details</h4>
              <p>
                <strong>Email: </strong>
                <a className="footer-link" href="techfordiversity@gmail.com">
                  techfordiversity@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone: </strong> +44 234 567 8900
              </p>
              <p>
                <strong>Address: </strong>
                <a
                  className="footer-link"
                  href="https://www.google.com/maps?q=University+of+Huddersfield,+Queensgate,+Huddersfield+HD1+3DH,+UK"
                  target="_blank"
                  rel="noreferrer"
                >
                  University of Huddersfield, Queensgate, Huddersfield HD1 3DH,
                  UK
                </a>
              </p>
            </div>
            <MapComponent />
          </Col>

          <Col lg={6} sm={12} className="mb-4">
            <h4>Send Us a Message</h4>
            <ContactForm />
          </Col>
        </Row>
      </Container>

      <p className="mb-0 text-center">
        © {new Date().getFullYear()} Tech for Diversity. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
