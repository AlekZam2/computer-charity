import React, { useState, useEffect } from "react";
import { Table, Form, Row, Col, Pagination } from "react-bootstrap";
import { DeviceTypesList, DeviceStatuses } from "../../helpers/Lists";
import { getDevices } from "../../api/devicesApi";

const DevicesTab = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const uniqueDeviceTypes = ["All", ...DeviceTypesList];
  const uniqueStatuses = ["All", ...DeviceStatuses];

  // Apply filters
  const filteredDevices = devices.filter(
    (device) =>
      (selectedDevice === "All" || device.deviceType === selectedDevice) &&
      (selectedStatus === "All" || device.status === selectedStatus)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...filteredDevices].slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredDevices.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await getDevices();
        setDevices(response);
        console.log("Fetched devices:", response);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDevices();
  }, []);

  return (
    <div>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Filter by Device Type</Form.Label>
            <Form.Select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
            >
              {uniqueDeviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
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

            <th>Device Type</th>
            <th>Make</th>
            <th>Model</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Donor</th>
            <th>Company</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((device) => (
              <tr key={device._id}>
                <td>{device.status}</td>
                <td>{device.deviceType}</td>
                <td>{device.make}</td>
                <td>{device.model}</td>
                <td>{device.age}</td>
                <td>{device.condition}</td>

                <td>
                  {device.donationId.userId.firstName}{" "}
                  {device.donationId.userId.lastName}
                </td>
                <td>{device.donationId.userId.companyName}</td>
                <td>{device.notes}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">
                No devices match the filters.
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

export default DevicesTab;
