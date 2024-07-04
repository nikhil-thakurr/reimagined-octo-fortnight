
import './App.css';
import About from './components/About';
import Eyes from './components/Eyes';
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
    </div>
  );
}

export default App;
