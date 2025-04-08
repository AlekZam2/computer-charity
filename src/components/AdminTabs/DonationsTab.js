import React, { useState } from "react";
import { Table, Form, Row, Col } from "react-bootstrap";

const DonationsTab = () => {
  const [donations, setDonations] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Get unique values for filtering
  const uniqueDeviceTypes = [
    "All",
    ...new Set(donations.map((d) => d.deviceType)),
  ];
  const uniqueStatuses = ["All", ...new Set(donations.map((d) => d.status))];

  // Apply filters
  const filteredDonations = donations.filter(
    (donation) =>
      (selectedDevice === "All" || donation.deviceType === selectedDevice) &&
      (selectedStatus === "All" || donation.status === selectedStatus)
  );

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
            <th>Donor</th>
            <th>Company</th>
            <th>Donation Type</th>
            <th>Device Type</th>
            <th>Make</th>
            <th>Model</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Other Info</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonations.length > 0 ? (
            filteredDonations.map((donation) => (
              <tr key={donation._id}>
                <td>{donation.status}</td>
                <td>
                  {donation.donationId.userId.firstName}{" "}
                  {donation.donationId.userId.lastName}
                </td>
                <td>{donation.donationId.userId.companyName}</td>
                <td>{donation.donationId.donationType}</td>
                <td>{donation.deviceType}</td>
                <td>{donation.make}</td>
                <td>{donation.model}</td>
                <td>{donation.age}</td>
                <td>{donation.condition}</td>
                <td>{donation.otherInformation}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">
                No donations match the filters.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DonationsTab;
