import './App.css';
import AboutUs from './Components/Home/About Us/AboutUs';
import FAQ from './Components/Home/FAQ/FAQ';
import Footer from './Components/Home/Footer/Footer';
import FooterMain from './Components/Home/Footer/FooterMain';
import LatestArticle from './Components/Home/Latest Article/LatestArticle';
import Navbar from './Components/Home/Navbar/Navbar';
import OurProjects from './Components/Home/Our Projects/OurProjects';
import OurWorks from './Components/Home/Our Works/OurWorks';
// import Slider from './Components/Home/Slider/Slider';
import SliderNew from './Components/Home/SliderNew/SliderNew';

function App() {
  return (
  <>
  <Navbar/>
  {/* <Slider/> */}
  <SliderNew/>
  <AboutUs/>
  <OurWorks/>
  <OurProjects/>
  <LatestArticle/>
  <FAQ/>
  <div className="footer-wrapper">
      <Footer />
      <FooterMain />
    </div>
  
  </>
  );
}

export default App;
