import React, { useState, useEffect } from "react";
import { Table, Form, Row, Col, Pagination } from "react-bootstrap";
import { DonationStatuses, formatDate } from "../../helpers";
import { getDonations } from "../../api/donationApi";

const DonationsTab = () => {
  const [donations, setDonations] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Get unique values for filtering
  const uniqueStatuses = ["All", ...DonationStatuses];

  // Apply filters
  const filteredDonations = donations.filter(
    (donation) => selectedStatus === "All" || donation.status === selectedStatus
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = [...filteredDonations].slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredDonations.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await getDonations();
        setDonations(response);
        console.log("Fetched donations:", response);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
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
            <th>Donor Name</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Donation Type</th>
            <th>Amount</th>
            <th>Devices</th>
            <th>Other Info</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((donation) => (
              <tr key={donation._id}>
                <td>{donation.status}</td>
                <td>
                  {donation.userId.firstName} {donation.userId.lastName}
                </td>
                <td>{donation.userId.companyName}</td>
                <td>{donation.userId.jobTitle}</td>
                <td>{donation.userId.email}</td>
                <td>{donation.userId.phone}</td>
                <td>{formatDate(donation.createdAt)}</td>
                <td>{donation.donationType}</td>
                <td>{donation.amount ? donation.amount : ""}</td>
                <td>{donation.devices.length}</td>
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

export default DonationsTab;
