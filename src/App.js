import React from 'react';
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

function App() {
  // work on transition trnslate 3d   
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              {/* <SliderNew /> */}
              <AboutUs />
              <OurWorks />
              {/* <AboutUs />
              <OurWorks />
              <OurProjects /> */}
              {/* <FAQ /> */}
            </>
          }
        />

        {/* Dynamic route for project details */}
        <Route path="/our-works/:id" element={<OurWorksDetail />} />
      </Routes>
      <div className="footer-wrapper">
        {/* <Footer />
        <FooterMain /> */}
      </div>
    </Router>
  );
}

export default App;






