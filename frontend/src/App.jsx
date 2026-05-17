import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import ProductDetails from './components/ProductDetails';
import Testimonials from './components/Testimonials';
import Shipping from './components/Shipping';
import Manufacturer from './components/Manufacturer';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 relative">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Benefits />
      <Ingredients />
      <ProductDetails />
      <Testimonials />
      <Shipping />
      <Manufacturer />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
