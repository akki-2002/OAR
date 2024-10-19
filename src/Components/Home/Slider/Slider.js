import React, { useState, useEffect } from 'react';
import './Slider.css'; 
import img from "../../../Images/slidimg.jpeg"

const Slider = () => {
  const images = [
   img,
   img,
   img,
   img,
   img,
   img,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <>

      <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>


      {/* <div className="slider-container">
        <div className="slider-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Slider;

