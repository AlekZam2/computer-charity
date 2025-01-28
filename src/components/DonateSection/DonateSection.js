import React from "react";
import donateFinancial from "../../assets/images/donateFinancial.jpg";
import donateCorporate from "../../assets/images/donateCorporate.jpg";
import donateIndividual from "../../assets/images/donateIndividual.jpg";
import "./DonateSection.css";

function DonateSection() {
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
        </li>
      </ul>
    </div>
  );
}

export default DonateSection;
