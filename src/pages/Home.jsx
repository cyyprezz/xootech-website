import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import CTA from '../components/CTA';


function App() {
  const [hash, setHash] = useState(null);
  
 /* useEffect(() => {
    console.log(window.location.hash);
    if (hash) {
        setHash(window.location.hash)
        if (hash !== window.location.hash) {
          const section = document.querySelector(window.location.hash);
          console.log(section);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }
    }
}, [window.location.hash]); */

  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <CTA />
    </div>
  );
}

export default App;