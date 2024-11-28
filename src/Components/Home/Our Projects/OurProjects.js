import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Our Projects/OurProjects.css"
import work1 from '../../../Images/work1.jpg'

const OurProjects = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    speed: 8000, // Adjust the duration for smooth scrolling
    cssEase: "linear", // Smooth linear scrolling
    arrows: false, // Hide navigation arrows
    pauseOnHover: false, // Avoid pausing when hovered4

  };

  const settings2 ={
    rtl : true
  }

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
    <div className="op">
         <div className="heading">
        <h2>
            Our Work
        </h2>

      </div>
      <div className="shadow"></div>
       
        <Slider {...settings} style={{marginBottom: "15px"}}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} style={{ width: "100%" }} className="opImg"/>
        </div>
      ))}
    </Slider>

    <Slider {...settings} {...settings2} >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} style={{ width: "100%" }} className="opImg"/>
        </div>
      ))}
    </Slider>

    <div className="shadow shdw"></div>
      
    </div>
    
  );
};

export default OurProjects;
