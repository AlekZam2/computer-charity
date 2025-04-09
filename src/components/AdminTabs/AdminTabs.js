import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import DonationsTab from "./DonationsTab";
import RequestsTab from "./RequestsTab";
import DevicesTab from "./DevicesTab";

const AdminTabs = () => {
  const [key, setKey] = useState("devices");

  return (
    <div className="container mt-4">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="devices" title="Devices">
          <DevicesTab />
        </Tab>
        <Tab eventKey="donations" title="Donations">
          <DonationsTab />
        </Tab>

        <Tab eventKey="requests" title="Requests">
          <RequestsTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AdminTabs;
