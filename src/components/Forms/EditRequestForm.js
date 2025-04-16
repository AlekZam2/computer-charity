import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CustomToast from "../CustomToast/CustomToast";
import { updateRequest } from "../../api/requestApi";
import { RequestStatuses } from "../../helpers";

function EditRequestForm({ handleClose, data, refresh }) {
  const [validated, setValidated] = useState(false);
  const [requestData, setRequestData] = useState(data);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setRequestData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
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
      await updateRequest(requestData);
      refresh();
      console.log("Request updated:", requestData);
      setToast({
        show: true,
        message: "Request updated successfully!",
        variant: "success",
      });

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
        <Form.Group controlId="status" className="mb-3">
          <Form.Label>Reqyest Status</Form.Label>
          <Form.Select
            value={requestData.status}
            onChange={(e) =>
              setRequestData((prev) => ({ ...prev, status: e.target.value }))
            }
          >
            {RequestStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="deviceType">
          <Form.Label>What type of device do you need?</Form.Label>
          <Form.Control
            type="text"
            name="deviceType"
            value={requestData.deviceType}
            onChange={handleChange}
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="notes">
          <Form.Label>Admin notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="reason"
            value={requestData.notes}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-3 mt-3">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditRequestForm;
