/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import CTASect from './components/CTASect';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream-50 text-earth-900 selection:bg-leaf-200 selection:text-leaf-900">
      
      {/* Structural layout modules */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Benefits />
        <Gallery />
        <Testimonials />
        <LocationContact />
        <CTASect />
      </main>

      <Footer />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      
    </div>
  );
}
