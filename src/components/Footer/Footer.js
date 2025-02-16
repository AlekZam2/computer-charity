import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css";
import MapComponent from "../MapComponent/MapComponent";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <footer className="bg-dark text-light py-4">
      <h3 className="footer-slogan text-center">
        <span>Tech for Diversity.</span> Empowering comunities one device at a
        time.
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
                <a className="footer-link" href="mailto:contact@example.com">
                  contact@computer-charity.com
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
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
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
