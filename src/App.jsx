import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;