import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Our Projects/OurProjects.css";
import aceWearsLogo from '../../../Images/1.png';
import nomadLogo from '../../../Images/2.png';
import pubaLogo from '../../../Images/3.png';
import didwaniaLogo from '../../../Images/4.png';
import holaYogLogo from '../../../Images/5.png';
import aceWearsLogoDark from '../../../Images/8.png';
import nomadLogoDark from '../../../Images/9.png';  
import pubaLogoDark from '../../../Images/10.png';
import didwaniaLogoDark from '../../../Images/11.png';
import holaYogLogoDark from '../../../Images/12.png';
import "../Our Projects/OurProjects.css"
import work1 from '../../../Images/work1.jpg'
import { Link } from "react-router-dom";

const OurProjects = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  const settings2 = {
    rtl: true,
  };

  const images = [
    { light: aceWearsLogo, dark: aceWearsLogoDark },
    { light: nomadLogo, dark: nomadLogoDark },
    { light: pubaLogo, dark: pubaLogoDark },
    { light: didwaniaLogo, dark: didwaniaLogoDark },
    { light: holaYogLogo, dark: holaYogLogoDark },
  ];

  const images2 = [
    { light: pubaLogo, dark: pubaLogoDark },
    { light: holaYogLogo, dark: holaYogLogoDark },
    { light: aceWearsLogo, dark: aceWearsLogoDark },
    { light: nomadLogo, dark: nomadLogoDark },
    { light: didwaniaLogo, dark: didwaniaLogoDark },
  ];

  return (
    <div className="op">
      <div className="heading">
        <h2>Our Work</h2>
      </div>
      <div className="shadow"></div>
       
        <Slider {...settings} style={{marginBottom: "15px"}}>
      {images.map((image, index) => (
        <Link to={`/our-works/1}`} key={index}>
          <img src={image.dark} alt={`Slide ${index}`} style={{ width: "100%" }} className="opImg"/>
        </Link>
      ))}
    </Slider>
    <Slider {...settings} {...settings2}>

      {images.map((image, index) => (
        <Link to={`/our-works/1}`} key={index}>
          <img src={image.dark} alt={`Slide ${index}`} style={{ width: "100%" }} className="opImg"/>
        </Link>
      ))}
    </Slider>

      
    </div>
  );
};

export default OurProjects;
