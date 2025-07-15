import './App.scss';
import Hero from './components/Hero';
import About from './components/About';
// import Schedules from './components/Schedules';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Reseller from './components/Reseller';
// import Services from './components/Services';

// import { Element } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <>
      <Header />
      <Hero />
      <About />
      {/* <Schedules /> */}
      {/* <Services /> */}
      <Reseller />
      <Contact />
      <Footer />
    </>
    </ParallaxProvider>
  );
}

export default App;
