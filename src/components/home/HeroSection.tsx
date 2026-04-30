import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const images = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop', // Luxury Wedding setup
  'https://images.unsplash.com/photo-1542314831-c6a420324869?q=80&w=2070&auto=format&fit=crop', // Luxury Resort exterior
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop', // Banquet/Event
];

const HeroSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Slider */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`hero-bg ${index === currentIdx ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content container">
        <div className="hero-text-box">
          <span className="hero-subtitle animate-slide-up">Welcome to Elysian</span>
          <h1 className="hero-title animate-slide-up delay-100">
            Where Dream Weddings <br />
            <span className="text-gold">Turn Into Timeless Memories</span>
          </h1>
          <p className="hero-desc animate-slide-up delay-200">
            Discover the epitome of luxury at Patna's premier destination for bespoke weddings, 
            exclusive events, and unforgettable stays.
          </p>
          <div className="hero-actions animate-slide-up delay-300">
            <a href="#about" className="btn-primary">Explore Venue</a>
            <a href="/contact" className="btn-glass">Schedule Visit</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
};

export default HeroSection;
