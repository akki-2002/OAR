import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet for metadata
import "./Blogs.css";
import { blogData } from "./BlogsData"; // Import the blog data
import { FiShare2 } from "react-icons/fi"; // Share icon from react-icons

function Blogs() {
  const { id } = useParams(); // Get the blog ID from the URL

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [id]);

  const blog = blogData.find((b) => b.id === parseInt(id)); // Find the specific blog by ID

  if (!blog) {
    return <div>Blog not found!</div>; // Handle case where the blog does not exist
  }

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
      // Fallback for browsers that don't support Web Share API
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
        <div className="blog-header">
          <h1>{blog.title}</h1>
          <span>{blog.subtitle}</span>
          {/* Share Button */}
          <button
            className="share-icon-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleShare();
            }}
          >
            <FiShare2 size={24} />
          </button>
        </div>
        <div className="blog-image">
          <img
            src={blog.bannerImage}
            alt={`${blog.title} banner`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
        <div className="blog-content">
          {blog.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return <p key={index}>{item.value}</p>;
              case "header":
                return <h2 key={index}>{item.value}</h2>;
              case "image":
                return (
                  <div key={index}>
                    <img src={item.value} alt="Blog content" />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        <div className="bottom-section">
          <h2>{blog.bottomSection.heading}</h2>
          <p>
            Get a free consultation today, and get on a call with our industry
            experts to skyrocket your business growth.
          </p>
          <a href="/help-center" className="submit-btn-footer">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
