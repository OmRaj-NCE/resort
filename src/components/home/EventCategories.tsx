import React, { useEffect, useRef, useState } from 'react';
import './EventCategories.css';

const events = [
  {
    title: "Corporate Events",
    desc: "Boardrooms, grand conferences, and corporate retreats with state-of-the-art facilities.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Birthday Parties",
    desc: "Themed celebrations and intimate gatherings to make your special day memorable.",
    img: "https://images.unsplash.com/photo-1530103862676-de88b325c9ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Engagement Ceremonies",
    desc: "Start your journey together in romantic, beautifully curated settings.",
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Private Celebrations",
    desc: "Anniversaries, get-togethers, and bespoke events tailored to your wishes.",
    img: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=2070&auto=format&fit=crop"
  }
];

const EventCategories: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setIsVisible(true);
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }, []);

  return (
    <section id="events" className="events-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Beyond Weddings</span>
          <h2 className="section-title">Versatile Spaces for Every Occasion</h2>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`event-card ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="event-img-wrapper">
                <img src={event.img} alt={event.title} referrerPolicy="no-referrer" />
                <div className="event-overlay">
                  <span className="btn-glass">Inquire Now</span>
                </div>
              </div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
