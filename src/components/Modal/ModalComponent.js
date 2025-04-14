import React from "react";
import { Modal } from "react-bootstrap";
import CorporateDonationForm from "../Forms/CorporateDonationForm";
import IndividualDonationForm from "../Forms/IndividualDonationForm";
import DeviceRequestForm from "../Forms/DeviceRequestForm";

function ModalComponent({ show, handleClose, formTitle, formDescription }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{formTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{formDescription}</p>
        {formTitle.includes("Corporate") && (
          <CorporateDonationForm handleClose={handleClose} />
        )}
        {formTitle.includes("Individual") && (
          <IndividualDonationForm handleClose={handleClose} />
        )}
        {formTitle.includes("Request") && (
          <DeviceRequestForm handleClose={handleClose} />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
