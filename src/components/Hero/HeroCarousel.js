import React from "react";
import { useScreenSize } from "../../context/ScreenSizeContext";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel3 from "../../assets/images/carousel3.jpg";
import Carousel4 from "../../assets/images/carousel4.jpg";
import Carousel1Large from "../../assets/images/carousel-desktop-1.jpg";
import Carousel2Large from "../../assets/images/carousel-desktop-2.jpg";
import Carousel3Large from "../../assets/images/carousel-desktop-3.jpg";
import Carousel4Large from "../../assets/images/carousel-desktop-4.jpg";
import "./HeroCarousel.css";

function HeroCarousel() {
  const screenSize = useScreenSize();

  const getImage = (small, large) => {
    if (screenSize < 600) return small;
    return large;
  };

  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <img
          className="d-block carousel-picture"
          src={getImage(Carousel1, Carousel1Large)}
          alt="Mother with the child"
        />
        <Carousel.Caption>
          <p>
            Empowering families with technology to create brighter, more
            inclusive futures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block carousel-picture"
          src={getImage(Carousel2, Carousel2Large)}
          alt="Two ladies with laptops"
        />
        <Carousel.Caption>
          <p>
            Supporting women through innovative technology solutions that bridge
            gaps and encourage equality
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block carousel-picture"
          src={getImage(Carousel3, Carousel3Large)}
          alt="Person on wheelchair with a laptop"
        />
        <Carousel.Caption>
          <p>
            Technology designed to create accessibility and opportunity for
            everyone, regardless of ability.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block carousel-picture"
          src={getImage(Carousel4, Carousel4Large)}
          alt="Older person with laptop"
        />
        <Carousel.Caption>
          <p>
            Ensuring that older generations stay connected and empowered through
            accessible tech.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
