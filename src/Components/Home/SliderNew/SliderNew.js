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
  const [perspective, setPerspective] = useState("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
  const boxRef = useRef(null);

  // Responsive slider settings
  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 425) {
        setSlidesToShow(2);
        setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
      } else if (window.innerWidth >= 425 && window.innerWidth < 769) {
        setSlidesToShow(4);
        setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
      } else {
        setSlidesToShow(6);
        setPerspective("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  // Scroll effect with proper event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY / 2;
      console.log(boxRef)
      if (boxRef.current) {
        boxRef.current.style.transform = `${perspective} translateY(${-offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log(boxRef)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [perspective]); // Trigger on perspective change

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    touchMove: true, // Ensures smooth touch swipe behavior
    draggable: true, // Allows drag to slide on desktop and mobile
  };

  const videos = [acewares, didwania, holayog, nomad, puba, acewares, didwania, holayog, nomad, puba];

  return (
    <>
      <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>
      <div className="container">
        <div className="box" ref={boxRef}>
          <div className="boxInner">
            
          </div>
          <Slider {...settings}>
            {videos.map((video, index) => {
              return (
                <div key={index}>
                  <video
                    src={video}
                    style={{ width: "100%" }}
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderNew;
