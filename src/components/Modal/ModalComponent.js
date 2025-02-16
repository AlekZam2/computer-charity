import React from "react";
import { Modal } from "react-bootstrap";
import CorporateDonationForm from "../Forms/CorporateDonationForm";

function ModalComponent({ show, handleClose, formTitle, formDescription }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{formTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{formDescription}</p>
        <CorporateDonationForm handleClose={handleClose} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ModalComponent;
