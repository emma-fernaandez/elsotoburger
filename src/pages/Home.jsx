
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, MapPin, Phone, Clock, Instagram, Menu as MenuIcon, X } from 'lucide-react';
import Hero from '../components/restaurant/Hero';
import About from '../components/restaurant/About';
import MenuSection from '../components/restaurant/MenuSection';
import Reviews from '../components/restaurant/Reviews';
import Gallery from '../components/restaurant/Gallery';
import Location from '../components/restaurant/Location';
import Contact from '../components/restaurant/Contact';
import Footer from '../components/restaurant/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Mostrar botón después de scrollear más de la altura de la ventana (después de la hero section)
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-black text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`
      }>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer flex items-center"
              onClick={() => scrollToSection('hero')}>

              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3f09aa0664c700f0964ec/bcf123167_logo-sotoburger-Photoroom.png"
                alt="El Soto Burger Logo" 
                className="h-24 w-24 object-contain hover:scale-105 transition-transform duration-300" 
                style={{ filter: 'drop-shadow(0 2px 8px rgba(255, 179, 0, 0.3))' }}
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['menu', 'horarios'].map((item) =>
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 transition-colors capitalize"
                style={{ color: 'inherit', letterSpacing: '0.025em', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFB300'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>

                  {item}
                </button>
              )}
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
                style={{
                  background: 'linear-gradient(135deg, #FFB300 0%, #FF6C34 100%)',
                  letterSpacing: '0.025em',
                  boxShadow: '0 4px 15px rgba(255, 179, 0, 0.3)',
                  fontWeight: 600,
                  fontSize: '0.9375rem'
                }}>

                Reservar Mesa
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              style={{ color: '#FFB300' }}>

              {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-t border-gray-800">

            <div className="px-4 py-6 space-y-4">
              {['menu', 'horarios'].map((item) =>
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left text-gray-300 transition-colors capitalize py-2"
              style={{ color: 'inherit', letterSpacing: '0.025em', fontWeight: 500 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFB300'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>

                  {item}
                </button>
            )}
              <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-center text-black px-6 py-2.5 rounded-full font-semibold"
              style={{
                background: 'linear-gradient(135deg, #FFB300 0%, #FF6C34 100%)',
                letterSpacing: '0.025em',
                fontWeight: 600
              }}>

                Reservar Mesa
              </button>
            </div>
          </motion.div>
        }
      </nav>

      {/* Sections */}
      <div id="hero"><Hero scrollToMenu={() => scrollToSection('menu')} scrollToReservation={() => scrollToSection('contacto')} /></div>
      <About />
      <div id="menu"><MenuSection /></div>
      <Reviews />
      <Gallery />
      <div id="horarios"><Location /></div>
      <div id="contacto"><Contact /></div>
      <Footer scrollToSection={scrollToSection} />

      {/* Scroll to Top Button - Solo visible después de la hero section */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => scrollToSection('hero')}
          className="fixed bottom-8 right-8 p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40"
          style={{ background: '#FFB300' }}>
          <ChevronDown className="transform rotate-180 text-black" size={24} />
        </motion.button>
      )}
    </div>);

}
