import React from "react";
import donateHero from "../../assets/images/donateHero.jpg";
import "./DonateHero.css";

function DonateHero() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-4">
      <img
        className="donateHero-picture"
        src={donateHero}
        alt="laptops on boxes"
      />
      <h2>Donate computers and laptops to charity</h2>
      <p>
        Why throw away your old computers and laptops when you can donate them
        and make a difference?
      </p>

      <p>
        When you donate your devices, you help reduce the demand for raw
        materials, cut CO2 emissions, and take a step toward a more sustainable
        future.
      </p>
      <p>
        We’ll securely data-wipe and refurbish your IT equipment, giving it a
        second life. These devices will then be passed on to people from diverse
        and underserved communities who need them most.{" "}
      </p>
      <p>
        By supporting Tech for Diversity, you’re empowering individuals,
        bridging the digital divide, and creating a meaningful environmental and
        social impact.
      </p>
      <p>Let’s transform lives together!</p>
    </div>
  );
}

export default DonateHero;
