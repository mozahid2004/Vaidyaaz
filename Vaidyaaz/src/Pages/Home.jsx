import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowWeHelp from "./HowWeHelp";
import StatsCounters from "./StatsCounters";
import Carausel1 from "../assets/Images/SaveTheEarth.jpg"
import Carausel2 from "../assets/Images/Chimnee.jpg"
import Carausel3 from "../assets/Images/Globe.jpg"

const Home = () => {
  const settings = {
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  const slides = [
    {
      img: Carausel1,
      text: "VAIDYAAZ CORPORATION PRIVATE LIMITED",
      p: "We specialize in delivering top-notch greenhouse solutions tailored to meet your needs."
    },
    {
      img: Carausel2,
      text: "We Build Quality and Trust",
      p: "Our products are built with precision and care to ensure long-lasting quality and customer satisfaction."
    },
    {
      img: Carausel3,
      text: "Your Vision, Our Mission",
      p: "The ENCON coating improves furnace efficiency by increasing thermal emissivity and decreasing thermal conductivity, which reduces carbon emissions and fuel consumption."
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.img} alt={`Slide ${index}`} className="carousel-img" />
            <div className="carousel-text">
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 3rem)",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {slide.text}
              </h2>

              <p
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                  maxWidth: "800px",
                  margin: "0 auto",
                  lineHeight: "1.5",
                }}
              >
                {slide.p}
              </p>

            </div>
          </div>
        ))}
      </Slider>

      <HowWeHelp />

      <StatsCounters/>
    </>
  );
};

export default Home;
