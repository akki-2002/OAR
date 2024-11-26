import './App.css';
import AboutUs from './Components/Home/About Us/AboutUs';
import FAQ from './Components/Home/FAQ/FAQ';
import Footer from './Components/Home/Footer/Footer';
import LatestArticle from './Components/Home/Latest Article/LatestArticle';
import Navbar from './Components/Home/Navbar/Navbar';
import OurWorks from './Components/Home/Our Works/OurWorks';
import Slider from './Components/Home/Slider/Slider';

function App() {
  return (
  <>
  <Navbar/>
  <Slider/>
  <AboutUs/>
  <OurWorks/>
  <LatestArticle/>
  <FAQ/>
  <Footer/>
  </>
  );
}

export default App;
