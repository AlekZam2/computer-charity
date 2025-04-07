import React, { useState, useContext } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import CustomToast from "../CustomToast/CustomToast";
import { login } from "../../api/authApi";
import { AuthContext } from "../../context/AuthContext";

const LoginButton = () => {
  const { contextLogin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setError("");

    try {
      const data = await login({ email: email, password: password });
      const decodedToken = jwtDecode(data.token);
      const userRole = decodedToken.role;
      contextLogin(data.token, userRole);
      handleClose();
      setToast({
        show: true,
        message: "Logged in successfully!",
        variant: "success",
      });
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <span className="me-1">Login</span>
        <i class="bi bi-box-arrow-in-right"></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
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

export default LoginButton;
