import React, { useState } from "react";
import { Button } from "react-bootstrap";
import donateFinancial from "../../assets/images/donateFinancial.jpg";
import donateCorporate from "../../assets/images/donateCorporate.jpg";
import donateIndividual from "../../assets/images/donateIndividual.jpg";
import ModalComponent from "../Modal/ModalComponent";
import "./DonateSection.css";

function DonateSection() {
  const [showModal, setShowModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = (title, description) => {
    setFormTitle(title);
    setFormDescription(description);
    setShowModal(true);
  };
  return (
    <div>
      <ul className="section-container d-flex flex-row flex-wrap justify-content-center align-items-stretch gap-5">
        <li className="d-flex flex-column align-items-center section-item">
          <img
            className="donateSection-picture"
            src={donateCorporate}
            alt="Laptops on the table in the office"
          />
          <h3>Corporate Donation</h3>
          <p>
            Does your company or organization have computers or any other IT
            equipment that could be reused?{" "}
          </p>
          <p>
            If you have more than 10 computers to donate, we’ll coordinate a
            free collection service.
          </p>
          <p>
            By donating your equipment, you’ll be supporting UK charities and
            making a meaningful impact on those in need.
          </p>
          <Button
            variant="primary"
            onClick={() =>
              handleShow(
                "Corporate Donation",
                "Please provide your details for a corporate donation."
              )
            }
          >
            Donate Corporate Equipment
          </Button>
        </li>
        <li className="d-flex flex-column align-items-center section-item">
          <img
            className="donateSection-picture"
            src={donateIndividual}
            alt="Woman with laptop"
          />
          <h3>Individual Donation</h3>
          <p className="section-container">
            Do you have an old computer, laptop, or other IT equipment gathering
            dust?
          </p>

          <p>
            Rather than letting it go to waste, consider donating it to help
            those in need. By donating your unwanted devices, you are directly
            contributing to closing the digital divide and providing essential
            technology to vulnerable individuals and communities.
          </p>
          <Button
            variant="primary"
            onClick={() =>
              handleShow(
                "Individual Donation",
                "Please provide your details for an individual donation."
              )
            }
          >
            Donate Individual Equipment
          </Button>
        </li>
        <li className="d-flex flex-column align-items-center section-item">
          <img
            className="donateSection-picture"
            src={donateFinancial}
            alt="Box with donation lable in woman hands"
          />
          <h3>Financial Donation</h3>
          <p className="section-container">
            As a registered charity, we deeply appreciate financial
            contributions that help us create an even greater impact. Your
            donation supports the logistics, refurbishment, and upgrade efforts
            required to breathe new life into computers and laptops,
            transforming them into vital tools for those who need them most.
          </p>
          <Button
            variant="primary"
            href="https://ko-fi.com/techfordiversity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Financially on Ko-fi
          </Button>
          {/* <Button
            variant="primary"
            onClick={() =>
              handleShow(
                "Financial Donation",
                "Please provide your details for a financial donation."
              )
            }
          >
            Donate Financially
          </Button> */}
        </li>
      </ul>
      <ModalComponent
        show={showModal}
        handleClose={handleClose}
        formTitle={formTitle}
        formDescription={formDescription}
      />
    </div>
  );
}

export default DonateSection;
