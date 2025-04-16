import React, { useState, useEffect } from "react";
import { Table, Form, Row, Col, Pagination } from "react-bootstrap";
import { RequestStatuses, formatDate } from "../../helpers";
import { getRequests } from "../../api/requestApi";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";

const RequestsTab = () => {
  const [requests, setRequests] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const uniqueStatuses = ["All", ...RequestStatuses];

  // Apply filters
  const filteredRequests = requests.filter(
    (request) => selectedStatus === "All" || request.status === selectedStatus
  );
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...filteredRequests].slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const fetchRequests = async () => {
    try {
      const response = await getRequests();
      setRequests(response);
      console.log("Fetched requests:", response);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Filter by Status</Form.Label>
            <Form.Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {uniqueStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>Date created</th>
            <th>Requester</th>
            <th>Requester Email</th>
            <th>Requester Phone</th>
            <th>Device Type</th>
            <th>Purpose</th>
            <th>Reason</th>
            <th>Notes</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((request) => (
              <tr key={request._id}>
                <td>{request.status}</td>
                <td>{formatDate(request.createdAt)}</td>
                <td>
                  {request.userId.firstName} {request.userId.lastName}
                </td>
                <td>{request.userId.email}</td>
                <td>{request.userId.phone}</td>
                <td>{request.deviceType}</td>
                <td>{request.useCase}</td>
                <td>{request.reason}</td>
                <td>{request.notes}</td>
                <td>
                  <EditButton
                    entityName="request"
                    entityData={request}
                    refresh={fetchRequests}
                  />
                </td>
                <td>
                  <DeleteButton
                    entityName="request"
                    entityId={request._id}
                    refresh={fetchRequests}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">
                No requests match the filters.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {totalPages > 1 && (
        <Pagination className="justify-content-center">
          <Pagination.First
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />

          {[...Array(totalPages).keys()].map((page) => (
            <Pagination.Item
              key={page + 1}
              active={page + 1 === currentPage}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      )}
    </div>
  );
};

export default RequestsTab;
