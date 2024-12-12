import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './Components/Home/Navbar/Navbar';
import SliderNew from './Components/Home/SliderNew/SliderNew';
import AboutUs from './Components/Home/About Us/AboutUs';
import FAQ from './Components/Home/FAQ/FAQ';
import Footer from './Components/Home/Footer/Footer';
import FooterMain from './Components/Home/Footer/FooterMain';
import OurWorks from './Components/Home/Our Works/OurWorks';
import OurProjects from './Components/Home/Our Projects/OurProjects';
import OurWorksDetail from './Components/Our Works Detail/OurWorksDetail';
import LatestArticle from "./Components/Home/Latest Article/LatestArticle";
import Blogs from './Components/Blogs/Blogs';
import Loader from './Components/Loader';

import { Player } from 'lottie-react';
import flow from './Videos/Flow 1.json'

function App() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },[])

  const [wp, setWp] = useState("static")
  const handleOp = (pt) =>{
    setWp(pt)
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Replace with actual data loading logic

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    
<div className="scroll-container">
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
          
          <Route
            path="/"
            element={
              loading ? (
                <Loader/>
              ):(
                <>
                <div id="slider">
                  <SliderNew />
                </div>
                <div id="about">
                  <AboutUs />
                </div>
                <div id="services">
                  <OurWorks />
                </div>
                <div id="work">
                  <OurProjects />
                </div>
                <div id="blogs">
                  <LatestArticle />
                </div>
                <div id="faq">
                  <FAQ />
                </div>
              </>
              )
              
            }
          />

          {/* Dynamic route for project details */}
          <Route path="/our-works/:id" element={<OurWorksDetail />} />

          {/* Dynamic route for blogs */}
          <Route path="/blogs/:id" element={<Blogs />} />
        </Routes>

        {/* Footer */}
        <div className="footer-wrapper">
          <div id="contact">
            <Footer />
          </div>
          <FooterMain />
        </div>
      </Router>
    </div>
     
    </>
    
  );
}

export default App;
