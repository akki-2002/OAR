import React, { useEffect, useState, useRef } from 'react';
import './OurWorks.css';

function OurWorks() {
  const [styles, setStyles] = useState([
    { transform: 'translateX(-100px)', opacity: 0 },
    { transform: 'translateX(-100px)', opacity: 0 },
    { transform: 'translateX(-100px)', opacity: 0 },
    { transform: 'translateX(-100px)', opacity: 0 },
  ]);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timeouts = [];
          styles.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setStyles((prevStyles) => {
                const updatedStyles = [...prevStyles];
                updatedStyles[index] = { transform: 'translateX(0)', opacity: 1 };
                return updatedStyles;
              });
            }, 100 * (index + 1));
            timeouts.push(timeout);
          });

          // Cleanup timeouts
          return () => timeouts.forEach(clearTimeout);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [styles]);

  return (
    <div ref={containerRef} className="our-works-container">
      <div className="heading">
        <h2>
          There is a lot we can do.<br />
          <span>—Here is a few.</span>
        </h2>
      </div>
      <div className="work-grid">
        <div className="work-item design" style={styles[3]}>
          <div className="overlay">
            <h3>DESIGN</h3>
            <p>Creating visually appealing and functional designs that capture your brand's essence.</p>
          </div>
        </div>
        <div className="work-item development" style={styles[2]}>
          <div className="overlay">
            <h3>DEVELOPMENT</h3>
            <p>Building innovative, high-performance digital solutions tailored to your needs.</p>
          </div>
        </div>
        <div className="work-item branding" style={styles[1]}>
          <div className="overlay">
            <h3>BRANDING</h3>
            <p>Developing a consistent brand identity that speaks volumes and stands out.</p>
          </div>
        </div>
        <div className="work-item digital-marketing" style={styles[0]}>
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
