import React, { useEffect, useRef, useState } from 'react';
import { Wifi, Coffee, Tv, Bath } from 'lucide-react';
import './RoomsPreview.css';

const RoomsPreview: React.FC = () => {
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
    <section id="rooms" className="rooms-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Luxury Stays</span>
          <h2 className="section-title">A Symphony of Comfort</h2>
          <p className="section-desc">
            Retreat into sanctuaries of peace. Our luxuriously appointed rooms and suites 
            are designed to provide the ultimate relaxation for you and your guests.
          </p>
        </div>

        <div className="rooms-layout">
          <div className={`room-showcase ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" alt="Presidential Suite" referrerPolicy="no-referrer" />
            <div className="room-info glass-panel">
              <h3>The Presidential Suite</h3>
              <p>Experience unparalleled luxury with panoramic views, a private jacuzzi, and round-the-clock butler service.</p>
              
              <div className="room-amenities">
                <span title="Free High-Speed Wi-Fi"><Wifi size={18} /></span>
                <span title="Premium In-Room Dining"><Coffee size={18} /></span>
                <span title="Smart Entertainment"><Tv size={18} /></span>
                <span title="Luxury Bath Experience"><Bath size={18} /></span>
              </div>
              
              <div className="room-action">
                <a href="/contact" className="btn-outline">Book Now</a>
              </div>
            </div>
          </div>

          <div className={`room-list ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <div className="room-list-item">
              <div className="room-list-img">
                <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop" alt="Executive Room" referrerPolicy="no-referrer"/>
              </div>
              <div className="room-list-content">
                <h4>Executive Rooms</h4>
                <p>Perfect for delegates and close family, offering elegant comfort and modern conveniences.</p>
              </div>
            </div>
            
            <div className="room-list-item">
              <div className="room-list-img">
                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop" alt="Bridal Suite" referrerPolicy="no-referrer"/>
              </div>
              <div className="room-list-content">
                <h4>The Bridal Suite</h4>
                <p>A masterfully crafted space designed exclusively for the bride to prepare, relax, and shine.</p>
              </div>
            </div>
            
            <div className="room-list-item">
              <div className="room-list-img">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" alt="Family Suites" referrerPolicy="no-referrer"/>
              </div>
              <div className="room-list-content">
                <h4>Family Heritage Suites</h4>
                <p>Spacious accommodations ensuring comfort and privacy for large families traveling together.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default RoomsPreview;
