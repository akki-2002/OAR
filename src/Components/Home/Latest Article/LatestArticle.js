import React from "react";
import Slider from "react-slick";
import "./LatestArticle.css";
import blog1 from "../../../Images/blog2.png";
import blog2 from "../../../Images/blog3.png";
import blog3 from "../../../Images/blog5.png";
import blog4 from "../../../Images/blog7.png";
import blog5 from "../../../Images/blog9.png";
import { Link } from "react-router-dom";

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
      title: "Why Digital Marketing is a Game-Changer for Small-Scale Businesses:",
      timeAgo: "8 hours ago",
    },
    {
      id: 4,
      image: blog4,
      category: "BUSINESS",
      title: "Why having a Website will boost your Digital Marketing growth:",
      timeAgo: "8 hours ago",
    },
    {
      id: 5,
      image: blog5,
      category: "BUSINESS",
      title: "Why having a Website will boost your Digital Marketing growth:",
      timeAgo: "8 hours ago",
    },
  ];

  const settings = {
    speed: 500,
    slidesToShow: 2.7,
    infinite: false,
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

  return (
    <>
    <div className="latest-article">
      <div className="latest-article-title">
        <h2>Latest Articles</h2>
      </div>
      <Slider {...settings} className="articles-slider">
        {articles.map((article) => (
          <Link to={`/blogs/${article.id}`} key={article.id}>
            <div className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <div className="article-meta">
                  <span className="category">{article.category}</span>
                  <span className="time">{article.timeAgo}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    
    </div>
      <div className="bottom-line"></div>
      </>
  );
}

export default LatestArticle;
