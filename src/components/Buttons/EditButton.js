import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditRequestForm from "../Forms/EditRequestForm";

const EditButton = ({ entityName, entityData, refresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    switch (entityName) {
      case "donation":
        setFormTitle("Edit Donation");
        break;
      case "device":
        setFormTitle("Edit device");
        break;
      case "request":
        setFormTitle("Edit Request");
        break;
      default:
        setFormTitle("Edit ");
    }

    setShowModal(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-pencil"></i>
      </Button>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{formTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {entityName === "request" && (
            <EditRequestForm
              handleClose={handleClose}
              data={entityData}
              refresh={refresh}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditButton;
