import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../SliderNew/slidernew.css'
import work1 from '../../../Images/work1.jpg'
import acewares from '../../../Videos/AceWears.mp4'
import didwania from '../../../Videos/Didwania.mp4'
import holayog from '../../../Videos/HolaYog Video.mp4'
import nomad from '../../../Videos/Nomad.mp4'
import puba from '../../../Videos/Puba.mp4'

const SliderNew = () => {

  const [iw, setIw] = useState(7)
  const [pers, setPers] = useState()

  useEffect(()=>{
    if(window.innerWidth < 425)
      {
        setIw(2)
        setPers("rotateX(5deg) rotateY(45deg) rotateZ(4deg)")
        console.log(pers)
      } else if(window.innerWidth > 425 && window.innerWidth < 769)
      {
        setIw(4)
        setPers("rotateX(5deg) rotateY(45deg) rotateZ(4deg)")
      }else if(window.innerWidth > 770 && window.innerWidth < 2560){
        setIw(7)
        setPers("rotateX(4deg) rotateY(20deg) rotateZ(5deg)")
      }else{
        setIw(8)
        setPers("rotateX(4deg) rotateY(20deg) rotateZ(5deg)")
      }
  },[iw, pers])
  
  

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

  const images = [
   acewares,
   didwania,
   holayog,
   nomad,
   puba,
   acewares,
   didwania,
   holayog,
   nomad,
   puba,
  ];

  // const images = [
  //   work1,
  //   work1,
  //   work1,
  //   work1,
  //   work1,
  //   work1,
  //   work1,
  //   work1,
  // ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ss, setSs] = useState({
    bottom: '-100px',
    opacity: "0"
  })
  const [id, setId] = useState({
    top: '-100px',
    opacity: "0"
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    setSs({
      bottom: '0',
      opacity: "1"
    })

    setId({
      top: '0',
      opacity: "1"
    })

    return () => clearInterval(interval); 
  }, [images.length]);

  const boxRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const offset = scrollY / 2; // Adjust the divisor to control movement intensity

    if (boxRef.current) {
        const existingTransform = boxRef.current.style.transform || ""; // Get existing transform properties
        const updatedTransform = existingTransform
            .replace(/translateY\([^)]+\)/, "") // Remove any existing translateY
            .trim(); // Clean up whitespace

        boxRef.current.style.transform = `${pers} translateY(${-offset}px)`; // Add new translateY
    }
};


    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Clean up the scroll event listener
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <>
        <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>
      <div className="container">
        <div className="box"  ref={boxRef}>
        <Slider {...settings} >
      {images.map((image, index) => (
        <div key={index}>
          {/* <img src={image} alt={`Slide ${index}`} style={{ width: "100%" }} /> */}
          {/* <video src={image} alt={`Slide ${index}`} style={{ width: "100%" }} autoPlay="true"></video> */}
          <video
  src={image}
  alt={`Slide ${index}`}
  style={{ width: "100%" }}
  autoPlay
  muted
  loop 
></video>

{/* <img src={image} alt="" style={{ width: "100%" }}/> */}

        </div>
      ))}
    </Slider>
        </div>
      
      </div>
      
    </>
    
  );
};

export default SliderNew;
