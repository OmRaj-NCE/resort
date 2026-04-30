import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Experience the pinnacle of luxury right in the heart of Bihar.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [isVisible]);

  return (
    <section id="about" className="about-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-wrapper">
            <div className={`about-img-box img-1 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <img 
                src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1925&auto=format&fit=crop" 
                alt="Luxury Hotel Lobby" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={`about-img-box img-2 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
              <img 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" 
                alt="Elegant Details" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="experience-badge glass-panel text-center">
              <h3>15+</h3>
              <p>Years of<br/>Grandeur</p>
            </div>
          </div>

          <div className={`about-content ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">A Symphony of Elegance & Heritage</h2>
            
            <div className="typewriter-container">
              <p className="typewriter-text">{typedText}<span className="cursor">|</span></p>
            </div>

            <p className="about-desc">
              Elysian Resorts was born from a singular vision: to bring world-class event hospitality 
              to our home state. We believe that grand celebrations shouldn't require leaving your roots behind.
            </p>
            <p className="about-desc">
              Spread across lush acres in Patna, our property blends contemporary luxury with royal 
              traditions. From intimate ceremonies to grand 2,000-guest galas, every detail is meticulously 
              crafted by our dedicated planners.
            </p>
            
            <ul className="about-features">
              <li>Premium Location & Accessibility</li>
              <li>Award-Winning Culinary Team</li>
              <li>Bespoke Decor & Styling Services</li>
            </ul>

            <a href="/about" className="btn-outline mt-8">Discover Our Vision</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
