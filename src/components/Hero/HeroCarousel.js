import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel4 from "../../assets/images/carousel4.jpg";
import Carousel5 from "../../assets/images/carousel5.jpg";
import "./HeroCarousel.css";

function UncontrolledExample() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <img
          className="d-block carousel-picture"
          src={Carousel1}
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
          src={Carousel2}
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
          src={Carousel4}
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
          src={Carousel5}
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

export default UncontrolledExample;
