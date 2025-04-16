import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteRequest } from "../../api/requestApi";
import CustomToast from "../CustomToast/CustomToast";

const EditButton = ({ entityName, entityId, refresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleDelete = async () => {
    try {
      console.log("Deleting entity with ID:", entityId);
      await deleteRequest(entityId);
      refresh();
      setToast({
        show: true,
        message: "Deleted successfully!",
        variant: "success",
      });
    } catch (error) {
      console.error("Error deleting entity:", error);
    } finally {
      handleClose();
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-trash"></i>
      </Button>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete this row? This action cannot be
            undone
          </p>
          <div className="d-flex justify-content-end gap-3 mt-3">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <CustomToast
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        message={toast.message}
        variant={toast.variant}
      />
    </>
  );
};

export default EditButton;
