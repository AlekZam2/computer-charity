import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
function CorporateDonationForm({ handleClose }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    phone: "",
    deviceQuantity: "",
    technicalSpecifications: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
    otherInformation: "",
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    setValidated(true);

    console.log("Form Data Submitted:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      jobTitle: "",
      email: "",
      phone: "",
      deviceQuantity: "",
      technicalSpecifications: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postcode: "",
      otherInformation: "",
    });

    setValidated(false);
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="d-flex flex-row gap-3 mb-3">
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              value={formData.firstName}
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
              value={formData.lastName}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Last name is required.
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <Form.Group controlId="companyName" className="mb-3">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.companyName}
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Company name is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="jobTitle" className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="deviceQuantity" className="mb-3">
          <Form.Label className="d-block">Device quantity</Form.Label>
          <Form.Text>
            Please let us know the number of devices you wish to donate. If
            you're donating more than 10 devices, we can arrange a free
            collection and get in touch to discuss the details.
          </Form.Text>
          <Form.Control
            type="number"
            min="1"
            value={formData.deviceQuantity}
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid number of devices.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="technicalSpecifications">
          <Form.Label className="d-block">Technical Specification</Form.Label>
          <Form.Text>
            Please specify the asset type (phone, laptop, or PC), along with the
            make, model, age, and operating system if known.
          </Form.Text>
          <Form.Control
            as="textarea"
            rows={3}
            value={formData.technicalSpecifications}
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Technical Specification is required. Please provide details about
            the asset type, make, model, age, and OS.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="address" className="mb-3">
          <Form.Label className="d-block">Address</Form.Label>
          <Form.Text className="d-block mb-3">
            Sharing your company address helps us coordinate logistics and
            arrange our collection service efficiently.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="addressLine1" className="mb-3">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            type="text"
            value={formData.addressLine1}
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Address Line 1 is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="addressLine2" className="mb-3">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            type="text"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="city" className="mb-3">
          <Form.Label>City / Town</Form.Label>
          <Form.Control
            type="text"
            value={formData.city}
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            City / Town is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="postcode" className="mb-3">
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type="text"
            value={formData.postcode}
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Postcode is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="otherInformation">
          <Form.Label className="d-block">Other Information</Form.Label>
          <Form.Text>Share any additional details here.</Form.Text>
          <Form.Control
            as="textarea"
            rows={3}
            value={formData.otherInformation}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CorporateDonationForm;
