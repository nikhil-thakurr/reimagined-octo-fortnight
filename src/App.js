
import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="w-full h-screen">
     <Header/>
     <LandingPage/>
     <Marquee/>
     <About/>
     <Eyes/>
     <Featured/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
