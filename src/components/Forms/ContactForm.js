import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CustomToast from "../CustomToast/CustomToast";
import { sendMessage } from "../../api/adminApi";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(formData);
      setToast({
        show: true,
        message: "Message  sent successfully!",
        variant: "success",
      });
    } catch (error) {
      setToast({
        show: true,
        message: "Failed to send message",
        variant: "danger",
      });
    } finally {
      setFormData({ name: "", email: "", message: "" });
    }
  };
  return (
    <div className="position-relative">
      <CustomToast
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        message={toast.message}
        variant={toast.variant}
      />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
