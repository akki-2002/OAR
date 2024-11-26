import React from "react";
import "./Footer.css"; // Add styles in this CSS file
import copy from "../../../Images/copy (1).png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h2>Get your Project Estimate for free</h2>
      </div>
      <div className="footer-right">
        <div className="footer-right-header">
          <h3>CONTACT US</h3>
          <div className="copy-email-container">
            <span className="copy-email">COPY EMAIL</span>
            <img src={copy} alt="Copy icon" />
          </div>
        </div>
        <p className="email">OARSTUDIOZ@GMAIL.COM</p>
        <form>
          <label className="services-heading">Services that you require *</label>
          <div className="services-checkboxes">
            <label>
              <input type="checkbox" name="services" value="design" />
              DESIGN
            </label>
            <label>
              <input type="checkbox" name="services" value="development" />
              DEVELOPMENT
            </label>
            <label>
              <input type="checkbox" name="services" value="branding" />
              BRANDING
            </label>
            <label>
              <input type="checkbox" name="services" value="other" />
              OTHER
            </label>
          </div>
          <label>
            Name *
            <input type="text" name="name" required />
          </label>
          <label>
            Email *
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message"></textarea>
          </label>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
