import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useScreenSize } from "../../context/ScreenSizeContext";
import RequestHero from "../../assets/images/request-hero.jpg";
import RequestHeroLarge from "../../assets/images/request-hero-landscape.jpg";
import WhoCanApply from "../../assets/images/who-can-apply.jpg";
import HowItWorks from "../../assets/images/how-it-works.jpg";
import ModalComponent from "../Modal/ModalComponent";

import "./RequestSection.css";

function RequestSection() {
  const screenSize = useScreenSize();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-4">
      <img
        className="hero-picture"
        src={screenSize < 600 ? RequestHero : RequestHeroLarge}
        alt="people with laptops"
      />
      <h2>Request a Computer or Laptop</h2>
      <p>
        Everyone deserves access to technology — whether it’s for learning,
        work, staying connected, or personal growth.
      </p>

      <p>
        If you or someone you know is in need of a computer, laptop, or other IT
        equipment, we’re here to help. Tech for Diversity provides refurbished
        devices to individuals and families who face barriers to digital access.
      </p>
      <p>
        Our mission is to bridge the digital divide by making technology more
        inclusive and accessible to all — especially those from low-income
        households or underserved communities.
      </p>
      <div className="row gx-4 gy-4 justify-content-center">
        <div className="col-12 col-md-6">
          <img
            className="section-picture"
            src={WhoCanApply}
            alt="laptop with 'you got this' message"
          />
          <h3 className="section-picture">Who Can Apply?</h3>
          <p>We welcome requests from:</p>
          <ul className="list-default">
            <li>
              <p>
                Individuals in need of a device for education, employment, or
                personal development
              </p>
            </li>
            <li>
              <p>Families without access to essential technology</p>
            </li>
            <li>
              <p>
                Charities and community groups supporting vulnerable individuals
              </p>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="section-picture"
            src={HowItWorks}
            alt="laptop with 'help' message"
          />
          <h3 className="section-picture">How It Works</h3>
          <ol>
            <li>
              <p>Submit a request using the form below.</p>
            </li>
            <li>
              <p>
                We’ll review your application and get in touch if we need more
                details.
              </p>
            </li>
            <li>
              <p>
                If approved, you’ll receive a refurbished device at no cost to
                you.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <b>Let us help you get connected — and move closer to your goals.</b>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Apply for a Device
      </Button>
      <ModalComponent
        show={showModal}
        handleClose={handleClose}
        formTitle="Device Request"
        formDescription="Please provide your details to request a laptop, computer or other device."
      />
    </div>
  );
}

export default RequestSection;
