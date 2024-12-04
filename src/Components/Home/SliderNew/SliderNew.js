import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../SliderNew/slidernew.css";
import acewares from "../../../Videos/Ace Wears.mp4";
import didwania from "../../../Videos/Didwania Video.mp4";
import holayog from "../../../Videos/HolaYog Video.mp4";
import nomad from "../../../Videos/Nomad Video.mp4";
import puba from "../../../Videos/Puba Video.mp4";

const SliderNew = () => {
  const [slidesToShow, setSlidesToShow] = useState(7);
  const [perspective, setPerspective] = useState(
    "rotateX(4deg) rotateY(20deg) rotateZ(5deg)"
  );
  const boxRef = useRef(null);

  // Handle responsive settings for the slider
  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 425) {
        setSlidesToShow(2);
        setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
      } else if (window.innerWidth >= 425 && window.innerWidth < 769) {
        setSlidesToShow(4);
        setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
      } else {
        setSlidesToShow(8);
        setPerspective("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY / 2;

      if (boxRef.current) {
        boxRef.current.style.transform = `${perspective} translateY(${-offset}px)`;
      }
    };

    const debounceScroll = () => {
      let timeout;
      return () => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => handleScroll(), 50);
      };
    };

    const debouncedScroll = debounceScroll();
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [perspective]);

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow, // Use state for real-time updates
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  const images = [acewares, didwania, holayog, nomad, puba];

  return (
    <>
      <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>
      <div className="container">
        <div className="box" ref={boxRef}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <video
                  src={image}
                  style={{ width: "100%" }}
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderNew;
