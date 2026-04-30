import React, { useEffect, useRef, useState } from 'react';
import { Camera, GlassWater, Music, Utensils } from 'lucide-react';
import './WeddingExperience.css';

const WeddingExperience: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setIsVisible(true);
        },
        { threshold: 0.2 }
      );
  
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }, []);

  const highlights = [
    {
      icon: <Camera size={24} />,
      title: "Pre-Wedding Shoots",
      desc: "Lush gardens and architectural marvels serve as perfect pristine backdrops."
    },
    {
      icon: <Utensils size={24} />,
      title: "Haldi & Mehendi",
      desc: "Vibrant outdoor courtyards tailored for intimate, colorful daytime celebrations."
    },
    {
      icon: <Music size={24} />,
      title: "Sangeet Nights",
      desc: "Grand ballrooms with state-of-the-art acoustics and lighting for unforgettable performances."
    },
    {
      icon: <GlassWater size={24} />,
      title: "Royal Reception",
      desc: "Expansive lawns accommodating up to 2000 guests for a majestic dining experience."
    }
  ];

  return (
    <section id="weddings" className="wedding-exp-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Destination Weddings</span>
          <h2 className="section-title">Crafting Your Real-Life Fairytale</h2>
          <p className="section-desc">
            From the intimate rituals to the grand finale, we offer versatile spaces that 
            transform to match the scale and style of every ceremony.
          </p>
        </div>

        <div className="wedding-layout">
          {/* Visual Showcase */}
          <div className={`wedding-visuals ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="visual-main image-mask-arch">
               <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" alt="Bride and Groom" referrerPolicy="no-referrer" />
               <div className="glass-panel overlay-cap">
                   <h4>Capacity up to 2000</h4>
                   <p>Indoor & Outdoor Venues</p>
               </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="wedding-highlights">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className={`highlight-card ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="icon-wrapper glass-panel">
                  {item.icon}
                </div>
                <div className="highlight-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            
            <div className={`mt-8 ${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
              <a href="/packages" className="btn-primary">View Wedding Packages</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WeddingExperience;
