import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../SliderNew/slidernew.css'
import work1 from '../../../Images/work1.jpg'

const SliderNew = () => {
  const settings = {
    infinite: true,
    slidesToShow: 7, // Number of visible slides
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    speed: 8000, // Adjust the duration for smooth scrolling
    cssEase: "linear", // Smooth linear scrolling
    arrows: false, // Hide navigation arrows
    pauseOnHover: false, // Avoid pausing when hovered
  };

  const images = [
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
    work1,
  ];

  return (
    <>
        <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>
      <div className="container">
        <div className="box">
        <Slider {...settings} >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} style={{ width: "100%" }} />
        </div>
      ))}
    </Slider>
        </div>
      
      </div>
      
    </>
    
  );
};

export default SliderNew;
