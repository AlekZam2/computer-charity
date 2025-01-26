import React from "react";
import HeroCarousel from "../components/Hero/HeroCarousel";

function Home() {
  return (
    <div>
      <HeroCarousel />
      <div>
        <h2>Idea</h2>
        <p>
          At university, I saw functional devices discarded unnecessarily. 'Tech
          for Diversity' repurposes these devices, providing communities with
          access to technology and empowering them to explore STEM fields.
        </p>
      </div>
      <div>
        <h2>Our aims</h2>
        <ul>
          <li>
            <p>
              Mentor and train volunteers, giving them hands-on tech experience
              to help launch their careers in the field.
            </p>
          </li>
          <li>
            <p>
              Refurbish 100+ computers and donate them to individuals in
              underserved communities to give them the tools needed to explore
              STEM fields.
            </p>
          </li>
          <li>
            <p>
              Raise awareness about the importance of tech accessibility by
              hosting events or workshops focused on STEM and technology.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>Who we help</h2>
        <p>We provide technology access to individuals who:</p>
        <ul>
          <li>
            <p>
              Face barriers to accessing essential tools due to socioeconomic
              challenges.
            </p>
          </li>
          <li>
            <p>
              Come from diverse backgrounds, including low-income families and
              underserved communities.
            </p>
          </li>
          <li>
            <p>
              Aspire to explore STEM opportunities and contribute to an
              inclusive, tech-driven future.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>How we plan to achieve this</h2>
        <p>
          We refurbish unused and unwanted computers and donate them to those in
          need. Our website, built with React.js, Node.js, and MongoDB, will
          streamline donations, and track contributions. By repurposing devices,
          we aim to empower individuals with the tools they need for a brighter
          future.
        </p>
      </div>
    </div>
  );
}

export default Home;
