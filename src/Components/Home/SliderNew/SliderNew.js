import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../SliderNew/slidernew.css";
import acewares from "../../../Videos/AceWears.mp4";
import didwania from "../../../Videos/Didwania.mp4";
import holayog from "../../../Videos/HolaYog Video.mp4";
import nomad from "../../../Videos/Nomad.mp4";
import puba from "../../../Videos/Puba.mp4";

const SliderNew = () => {
  const [iw, setIw] = useState(7);
  const [pers, setPers] = useState("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
  const persRef = useRef(pers);
  const boxRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 425) {
      setIw(2);
      setPers("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
    } else if (window.innerWidth >= 425 && window.innerWidth < 769) {
      setIw(4);
      setPers("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
    } else {
      setIw(8);
      setPers("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
    }
  }, []);

  useEffect(() => {
    persRef.current = pers; // Keep the `pers` value updated in the ref
  }, [pers]);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const offset = scrollY / 2; // Adjust the divisor to control movement intensity

    if (boxRef.current) {
      boxRef.current.style.transform = `${persRef.current} translateY(${-offset}px)`; // Combine `pers` with the scroll effect
    }
  };

  // Debounce for scroll event
  let timeout;
  const debounceScroll = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => handleScroll(), 10); // Adjust delay for smooth updates
  };

  useEffect(() => {
    window.addEventListener("scroll", debounceScroll);

    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: iw, // Number of visible slides
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    speed: 6000, // Adjust the duration for smooth scrolling
    cssEase: "linear", // Smooth linear scrolling
    arrows: false, // Hide navigation arrows
    pauseOnHover: false, // Avoid pausing when hovered
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
                  alt={`Slide ${index}`}
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
