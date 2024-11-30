import React from 'react';
import './OurWorksDetail.css';

const worksData = [
  {
    id: "1",
    title: "Ace Wears Website Design",
    name: "ACE WEARS",
    category: "WEB DESIGN",
    imgSrc: require("../../Images/Ace Wears.jpg"),
  },
  {
    id: "2",
    title: "XYZ Clothing Website Design",
    name: "XYZ CLOTHING",
    category: "WEB DESIGN",
    imgSrc: require("../../Images/Didwania.jpg"),
  },
  {
    id: "3",
    title: "Creative Minds Portfolio",
    name: "CREATIVE MINDS",
    category: "PORTFOLIO",
    imgSrc: require("../../Images/Nomad.jpg"),
  },
];

function OurWorksDetail({ id }) {
  const work = worksData.find((item) => item.id === id);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div className="works-container">
      <div className="works-navbar">
        <span className="works-left-text">{work.name}</span>
        <div className="works-line"></div>
        <span className="works-right-text">{work.category}</span>
      </div>
      <div className="works-main-content">
        <h1 className="works-title">{work.title}</h1>
      </div>
      <div className="works-image-container">
        <img src={work.imgSrc} alt={work.title} className="works-image" />
      </div>
    </div>
  );
}

export default OurWorksDetail;
