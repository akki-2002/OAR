import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import "./Blogs.css";
import { blogData } from "./BlogsData"; // Import the blogData
import { Link } from "react-router-dom";
import { FiShare2 } from "react-icons/fi"; // Import the share icon from react-icons

function Blogs() {
  const { id } = useParams(); // Get the blog ID from the URL
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [id, location]);

  const blog = blogData.find((b) => b.id === parseInt(id)); // Find the specific blog by ID

  if (!blog) {
    return <div>Blog not found!</div>; // Handle case where blog does not exist
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShare = () => {
    const blogUrl = window.location.href;

    // Check if Web Share API is supported
    if (navigator.share) {
      navigator
        .share({
          title: blog.title,
          text: blog.subtitle,
          url: blogUrl,
        })
        .then(() => console.log("Blog shared successfully!"))
        .catch((err) => console.error("Error sharing blog:", err));
    } else {
      // Fallback for non-supporting browsers
      alert("Web Share API is not supported in this browser.");
    }
  };

  return (
    <div className="blogs-container">
      {/* Dynamic Metadata */}
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.subtitle} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.subtitle} />
        <meta property="og:image" content={blog.bannerImage} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="blog">
        <div
          className="blog-header"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onClick={scrollToTop}
        >
          <h1 style={{ flexGrow: 1 }}>
            {blog.title}
            <br />
            <span>{blog.subtitle}</span>
          </h1>
          {/* Share Icon Button */}
          <button
            className="share-icon-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering scrollToTop when clicking the share button
              handleShare();
            }}
            aria-label="Share Blog"
          >
            <FiShare2 size={24} />
          </button>
        </div>
        <div className="blog-image">
          <img
            src={blog.bannerImage}
            alt={`${blog.title} banner`}
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="blog-content">
          {blog.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return <p key={index} className="blog-text">{item.value}</p>;
              case "header":
                return <h2 key={index} className="blog-header">{item.value}</h2>;
              case "image":
                return (
                  <div key={index} className="content-image">
                    <img src={item.value} alt="Blog content" />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        <div className="bottom-section">
          <h2
            dangerouslySetInnerHTML={{ __html: blog.bottomSection.heading }}
          ></h2>
          <p>
            Get a free consultation today, get on a call with our industry
            experts to skyrocket your business growth.
          </p>
          <Link to="/help-center">
            <button className="submit-btn-footer">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
