import React, { useState } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import "./Forms.css";

// Example AssetTypesList definition (replace with actual data or import)

import { submitDonation } from "../../api/donationApi";
import CustomToast from "../CustomToast/CustomToast";
import {
  DeviceTypesList,
  ComputerConditionList,
  AssetAges,
} from "../../helpers/Lists";

function CorporateDonationForm({ handleClose }) {
  const [validated, setValidated] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const newUserData = {
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    phone: "",
    role: "donor",
    address: "",
    password: "",
    requiresPassword: false,
  };
  const newAddressData = {
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
  };
  const newDonationData = {
    devices: [],
    otherInformation: "",
  };
  const newDeviceData = {
    id: 1,
    deviceType: "",
    make: "",
    model: "",
    age: "",
    condition: "",
    otherInformation: "",
    status: "Pending",
  };
  const [userData, setUserData] = useState(newUserData);
  const [addressData, setAddressData] = useState(newAddressData);
  const [donationData, setDonationData] = useState(newDonationData);
  const [devicesData, setDevicesData] = useState([]);
  const [deviceQuantity, setDeviceQuantity] = useState(0);

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id in newUserData) {
      setUserData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
      console.log("User data updated:", userData);
    }

    if (id in newAddressData) {
      setAddressData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
    if (id === "deviceQuantity") {
      const quantity = parseInt(value, 10) || 0;
      setDeviceQuantity(quantity);
      setDevicesData(
        Array.from({ length: quantity }, (_, index) => ({
          ...newDeviceData,
          id: index + 1,
        }))
      );
    }

    if (id in newDonationData) {
      setDonationData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  const handleDeviceChange = (index, field, value) => {
    const updatedDevices = [...devicesData];
    updatedDevices[index][field] = value;
    setDevicesData(updatedDevices);
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
      const donationPayload = {
        user: { ...userData, address: Object.values(addressData).join(", ") },
        donation: {
          donationType: "device",
          devices: devicesData,
          otherInformation: donationData.otherInformation,
        },
      };
      console.log("Donation submitted:", donationPayload);
      await submitDonation(donationPayload);

      setToast({
        show: true,
        message: "Donation request submitted successfully!",
        variant: "success",
      });
      setUserData(newUserData);
      setAddressData(newAddressData);
      setDonationData(newDonationData);
      handleClose();
    } catch (error) {
      console.error("Error submitting donation:", error);
      setToast({
        show: true,
        message: "Failed to submit donation request. Try again later.",
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
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Personal Details</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-row gap-3 mb-3">
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
              </div>
              <Form.Group controlId="companyName" className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.companyName}
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
                  value={userData.jobTitle}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={userData.email}
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
                  value={userData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Donation Information</Accordion.Header>
            <Accordion.Body>
              <Form.Group controlId="deviceQuantity" className="mb-3">
                <Form.Label className="d-block">Device quantity</Form.Label>
                <Form.Text>
                  Please let us know the number of devices you wish to donate.
                  If you're donating more than 10 devices, we can arrange a free
                  collection and get in touch to discuss the details.
                </Form.Text>
                <Form.Control
                  type="number"
                  min="1"
                  value={donationData.deviceQuantity}
                  required
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid number of devices.
                </Form.Control.Feedback>
              </Form.Group>
              {devicesData.map((device, index) => (
                <div key={device.id} className="border p-3 mb-3">
                  <h5>Device {device.id}</h5>
                  <Form.Group controlId={`deviceType-${index}`}>
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      required
                      value={device.assetType}
                      onChange={(e) =>
                        handleDeviceChange(index, "deviceType", e.target.value)
                      }
                    >
                      <option value="">Select type</option>
                      {DeviceTypesList.map((type, i) => (
                        <option key={i} value={type}>
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId={`make-${index}`}>
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                      type="text"
                      value={device.make}
                      onChange={(e) =>
                        handleDeviceChange(index, "make", e.target.value)
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId={`model-${index}`}>
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      type="text"
                      value={device.model}
                      onChange={(e) =>
                        handleDeviceChange(index, "model", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId={`age-${index}`}>
                    <Form.Label>Age</Form.Label>
                    <Form.Select
                      value={device.age}
                      onChange={(e) =>
                        handleDeviceChange(index, "age", e.target.value)
                      }
                    >
                      <option value="">Select age</option>
                      {AssetAges.map((age, i) => (
                        <option key={i} value={age}>
                          {age}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId={`condition-${index}`}>
                    <Form.Label>Condition</Form.Label>
                    <Form.Select
                      value={device.condition}
                      onChange={(e) =>
                        handleDeviceChange(index, "condition", e.target.value)
                      }
                    >
                      <option value="">Select condition</option>
                      {ComputerConditionList.map((condition, i) => (
                        <option key={i} value={condition}>
                          {condition}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId={`otherInformation-${index}`}>
                    <Form.Label>Other information</Form.Label>
                    <Form.Control
                      type="text"
                      value={device.otherInformation}
                      onChange={(e) =>
                        handleDeviceChange(
                          index,
                          "otherInformation",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </div>
              ))}

              <Form.Group className="mb-3" controlId="otherInformation">
                <Form.Label className="d-block">Other Information</Form.Label>
                <Form.Text>Share any additional details here.</Form.Text>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={donationData.otherInformation}
                  onChange={handleChange}
                />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
          {deviceQuantity >= 10 && (
            <Accordion.Item eventKey="2">
              <Accordion.Header className="blue-100">Address</Accordion.Header>
              <Accordion.Body>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Label className="d-block">Address</Form.Label>
                  <Form.Text className="d-block mb-3">
                    Sharing your company address helps us coordinate logistics
                    and arrange our collection service efficiently.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="addressLine1" className="mb-3">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type="text"
                    value={addressData.addressLine1}
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
                    value={addressData.addressLine2}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="city" className="mb-3">
                  <Form.Label>City / Town</Form.Label>
                  <Form.Control
                    type="text"
                    value={addressData.city}
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
                    value={addressData.postcode}
                    required
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Postcode is required.
                  </Form.Control.Feedback>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>

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
