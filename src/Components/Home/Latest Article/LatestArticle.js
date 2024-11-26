import React from "react";
import Slider from "react-slick";
import "./LatestArticle.css";
import blog from "../../../Images/blog1.jpeg";

function LatestArticle() {
  const articles = [
    {
      id: 1,
      image: blog,
      category: "BUSINESS",
      title: "Why having a Website is a must for your Business",
      timeAgo: "8 hours ago",
    },
    {
      id: 2,
      image: blog,
      category: "BUSINESS",
      title: "Why having a Website is a must for your Business",
      timeAgo: "8 hours ago",
    },
    {
      id: 3,
      image: blog,
      category: "BUSINESS",
      title: "Why having a Website is a must for your Business",
      timeAgo: "8 hours ago",
    },
    {
      id: 4,
      image: blog,
      category: "BUSINESS",
      title: "Why having a Website is a must for your Business",
      timeAgo: "8 hours ago",
    },
  ];

  const settings = {
    speed: 500,
    slidesToShow: 2.7,
    infinite: false, // Disable infinite scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="latest-article">
      <div className="latest-article-title">
        <h2>Latest Articles</h2>
      </div>
      <Slider {...settings} className="articles-slider">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
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

export default LatestArticle;
