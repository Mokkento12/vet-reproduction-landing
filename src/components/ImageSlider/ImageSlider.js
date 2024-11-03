import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slidesData = [
    {
      id: 1,
      title: "Профессиональная помощь в репродукции",
      image: `${process.env.PUBLIC_URL}/images/pets/pets-1.jpg`,
    },
    {
      id: 2,
      title: "Новейшие методы диагностики",
      image: `${process.env.PUBLIC_URL}/images/pets/pets-2.jpg`,
    },
    {
      id: 3,
      title: "Безопасность и забота",
      image: `${process.env.PUBLIC_URL}/images/pets/pets-3.jpg`,
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-text">
              <h2>{slide.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
