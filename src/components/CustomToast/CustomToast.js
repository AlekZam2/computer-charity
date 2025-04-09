import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "./CustomToast.css";

const CustomToast = ({ show, onClose, message, variant = "success" }) => {
  return (
    <ToastContainer className="p-3 toast-container">
      <Toast bg={variant} show={show} onClose={onClose} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">
            {variant === "success" ? "Success" : "Error"}
          </strong>
        </Toast.Header>
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
