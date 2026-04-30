import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Aarti & Rohan",
    event: "Destination Wedding",
    text: "Elysian Resorts made our dream wedding a reality. The attention to detail, the gorgeous venues, and the hospitality were beyond what we could have ever imagined.",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" // Couple
  },
  {
    name: "Vikram Singhania",
    event: "Corporate Gala",
    text: "We hosted our annual corporate gala here. The tech facilities in the boardroom and the grandeur of the reception hall impressed all our international delegates.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sneha Kapoor",
    event: "Engagement Ceremony",
    text: "A magical evening under the stars. The decor team understood exactly what I wanted. Thank you for making the start of our journey so beautiful.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const next = () => setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real Stories</span>
          <h2 className="section-title">Words from Our Guests</h2>
        </div>

        <div className="testimonial-wrapper">
          <div className="testimonial-slider" style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
            {testimonials.map((test, idx) => (
              <div key={idx} className="testimonial-slide">
                <div className="testimonial-content glass-panel">
                  <div className="quote-icon">
                    <Quote size={40} />
                  </div>
                  <p className="test-text">{test.text}</p>
                  
                  <div className="test-author">
                    <div className="author-img">
                      <img src={test.img} alt={test.name} referrerPolicy="no-referrer" />
                    </div>
                    <div className="author-info">
                      <h4>{test.name}</h4>
                      <span>{test.event}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-controls">
            <button onClick={prev} className="ctrl-btn" aria-label="Previous"><ChevronLeft /></button>
            <button onClick={() => setIsPaused(!isPaused)} className="ctrl-btn play-pause" aria-label={isPaused ? "Play" : "Pause"}>
              {isPaused ? <Play size={18} /> : <Pause size={18} />}
            </button>
            <button onClick={next} className="ctrl-btn" aria-label="Next"><ChevronRight /></button>
          </div>
          
          <div className="slider-dots">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${currentIdx === idx ? 'active' : ''}`}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
