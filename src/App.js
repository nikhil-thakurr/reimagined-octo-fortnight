
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="w-full h-screen">
     <Header/>
     <LandingPage/>
     <Marquee/>
    </div>
  );
}

export default App;
