import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../SliderNew/slidernew.css';
import img from '../../../Images/slidimg.jpeg';

function SliderNew() {
  const [ss, setSs] = useState({ bottom: '-100px' });
  const [id, setId] = useState({ top: '-100px' });

  useEffect(() => {
    setSs({ bottom: '0' });
    setId({ top: '0' });
  }, []);

  const sliderImgs = [
    img, img, img, img, img, img
  ]

  return (
    <div>
      <div className="slider-text-container">
        <h1 className="innovative-designs" style={id}>Innovative Designs</h1>
        <h2 className="seamless-solutions" style={ss}>SEAMLESS SOLUTIONS</h2>
      </div>

    <div className="sliderMain">
        <div className="slider">
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
        </div>
    </div>
    </div>
  );
}

export default SliderNew;
