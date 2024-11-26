import React from 'react';
import './OurWorks.css';

function OurWorks() {
  return (
    <div className="our-works-container">
      <div className="heading">
        <h2>
          There is a lot we can do.<br />
          <span>—Here is a few.</span>
        </h2>
      </div>
      <div className="work-grid">
        <div className="work-item design">
          <div className="overlay">
            <h3>DESIGN</h3>
            <p>Creating visually appealing and functional designs that capture your brand's essence.</p>
          </div>
        </div>
        <div className="work-item development">
          <div className="overlay">
            <h3>DEVELOPMENT</h3>
            <p>Building innovative, high-performance digital solutions tailored to your needs.</p>
          </div>
        </div>
        <div className="work-item branding">
          <div className="overlay">
            <h3>BRANDING</h3>
            <p>Developing a consistent brand identity that speaks volumes and stands out.</p>
          </div>
        </div>
        <div className="work-item digital-marketing">
          <div className="overlay">
            <h3>DIGITAL MARKETING</h3>
            <p>Expanding your brand's reach through strategic and impactful marketing campaigns.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWorks;

