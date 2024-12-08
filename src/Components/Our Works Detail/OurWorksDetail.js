import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './OurWorksDetail.css';

function OurWorksDetail() {
  const { id } = useParams();
  const [work, setWork] = useState(null);

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
      title: "Didwania Creations Administrative Controls",
      name: "DIDWANIA",
      category: "WEB DESIGN",
      imgSrc: require("../../Images/Didwania.jpg"),
    },
    {
      id: "3",
      title: "Nomad Interiors Web Design",
      name: "NOMAD",
      category: "WEB DESIGN",
      imgSrc: require("../../Images/Nomad.jpg"),
    },
    {
      id: "4",
      title: "Puba Productions Web Design & Development",
      name: "PUBA",
      category: "WEB DESIGN",
      imgSrc: require("../../Images/Puba.jpg"),
    },
    {
      id: "5",
      title: "Nomad Interiors Web Design",
      name: "NOMAD",
      category: "WEB DESIGN",
      imgSrc: require("../../Images/Nomad.jpg"),
    },
  ];
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // this.props.history.listen((location, action) => {
    //   setTimeout(()=>{document.getElementById('root'.scrollIntoView({behavior: "smooth" }) )})
    // })
  },[])

  // Set the selected work based on the ID
  useEffect(() => {
    const selectedWork = worksData.find((item) => item.id === id);
    setWork(selectedWork);
  }, [id]);

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
