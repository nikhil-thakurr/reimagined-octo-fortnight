
import './App.css';

import LocomotiveScroll from 'locomotive-scroll';
import About from './components/About';
import Cards from './components/Cards';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Footer from './components/Footer';
import FooterMain from './components/FooterMain';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full ">
     <Header/>
     <LandingPage/>
     <Marquee/>
     <About/>
     <Eyes/>
     <Featured/>
     <Cards/>
     <Footer/>
     <FooterMain/>
    </div>
  );
}

export default App;
