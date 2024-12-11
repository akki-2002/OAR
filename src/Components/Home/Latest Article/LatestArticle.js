import React from "react";
import Slider from "react-slick";
import "./LatestArticle.css";
import blog1 from "../../../Images/blog2.png";
import blog2 from "../../../Images/blog3.png";
import blog3 from "../../../Images/blog5.png";
import blog4 from "../../../Images/blog7.png";
import blog5 from "../../../Images/blog9.png";
import blog6 from "../../../Images/blog11.png";
import blog7 from "../../../Images/blog13.png";
import blog8 from "../../../Images/blog13.png";

function LatestArticle() {
  const articles = [
    {
      id: 1,
      image: blog1,
      category: "BUSINESS",
      title: "Custom Websites vs. WordPress: Make the right choice.",
      timeAgo: "8 hours ago",
    },
    {
      id: 2,
      image: blog2,
      category: "BUSINESS",
      title: "Is a Website Necessary for a Growing Business?",
      timeAgo: "8 hours ago",
    },
    {
      id: 3,
      image: blog3,
      category: "BUSINESS",
      title: "Why Digital Marketing is a Game-Changer for Small-Scale Businesses",
      timeAgo: "8 hours ago",
    },
    {
      id: 4,
      image: blog4,
      category: "BUSINESS",
      title: "Why having a Website will boost your Digital Marketing growth",
      timeAgo: "8 hours ago",
    },
    {
      id: 5,
      image: blog5,
      category: "BUSINESS",
      title: "Drive More Traffic to Your Resort with These SEO Tips",
      timeAgo: "8 hours ago",
    },
    {
      id: 6,
      image: blog6,
      category: "BUSINESS",
      title: "How to Build a High-Converting E-Commerce Website",
      timeAgo: "8 hours ago",
    },
    {
      id: 7,
      image: blog7,
      category: "BUSINESS",
      title: "Why High-Quality Web Design Matters for Your Brand",
      timeAgo: "8 hours ago",
    },
    {
      id: 8,
      image: blog8,
      category: "BUSINESS",
      title: "The Role of Branding in Building Customer Loyalty",
      timeAgo: "8 hours ago",
    },
  ];

  const settings = {
    speed: 500,
    slidesToShow: 2.7,
    infinite: false,
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1.5 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleNavigate = (id) => {
    window.location.href = `/blogs/${id}`;
  };

  return (
    <>
    <div className="latest-article">
      <div className="latest-article-title">
        <h2>Latest Articles</h2>
      </div>
      <Slider {...settings} className="articles-slider">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-card"
            onClick={() => handleNavigate(article.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <div className="article-content">
              <div className="article-meta">
                <span className="category">{article.category}</span>
                <span className="time">{article.timeAgo}</span>
              </div>
              <h3 className="article-title">{article.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    
    </div>
      <div className="bottom-line"></div>
      </>
  );
}

const CustomArrow = ({ direction, onClick }) => {

  return (
    <button
      className={`slick-arrow ${direction}`}
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );
};



export default LatestArticle;
