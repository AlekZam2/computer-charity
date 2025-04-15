import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CustomToast from "../CustomToast/CustomToast";
import { submitRequest } from "../../api/requestApi";

function DeviceRequestForm({ handleClose }) {
  const newUserData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "requester",
    address: "",
    password: "",
    requiresPassword: false,
  };
  const newRequestData = {
    deviceType: "",
    reason: "",
    useCase: "",
  };
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState(newUserData);
  const [requestData, setRequestData] = useState(newRequestData);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id in newUserData) {
      setUserData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
    if (id in newRequestData) {
      setRequestData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(true);
    try {
      const requestPayload = {
        user: userData,
        request: requestData,
      };
      console.log("Request submitted:", requestPayload);
      await submitRequest(requestPayload);

      setToast({
        show: true,
        message: "Request submitted successfully!",
        variant: "success",
      });
      setUserData(newUserData);
      setRequestData(newRequestData);
      handleClose();
    } catch (error) {
      console.error("Error request submitting:", error);
      setToast({
        show: true,
        message: "Failed to submit request. Try again later.",
        variant: "danger",
      });
    } finally {
      setValidated(false);
    }
  };

  return (
    <div>
      <CustomToast
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        message={toast.message}
        variant={toast.variant}
      />

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            autoFocus
            required
            value={userData.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            First name is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            required
            value={userData.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Last name is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number </Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="deviceType">
          <Form.Label>What type of device do you need?</Form.Label>
          <Form.Control
            type="text"
            name="deviceType"
            value={requestData.deviceType}
            onChange={handleChange}
            placeholder="Laptop, desktop computer, tablet, etc."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="useCase">
          <Form.Label>How will you use the device?</Form.Label>
          <Form.Control
            type="text"
            name="useCase"
            value={requestData.useCase}
            onChange={handleChange}
            placeholder="e.g., online classes, job applications, creative projects"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="reason">
          <Form.Label>Tell us a little about your situation</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="reason"
            value={requestData.reason}
            onChange={handleChange}
            placeholder="Optional but helpful — this helps us understand how we can best support you"
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-3 mt-3">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default DeviceRequestForm;
