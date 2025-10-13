import React from 'react'
import './index.css'
import Navbar from './pages/Navbar'
import Hero from "./pages/Hero";
import Exp from './pages/Exp';
import Faqs from './pages/Faqs';
import Footer from './pages/Footer';
import Location from "./pages/Location";

import Coaches from './pages/Coaches';




function App() {
  return (
    <div className="font-manrope">
      <Navbar />
      <Hero />
      <Exp />
      <Location />
      <Faqs />
      <Footer />
      <Coaches/>
    </div>
  );
}

export default App
