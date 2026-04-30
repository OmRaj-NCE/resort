import React, { useEffect, useRef, useState } from 'react';
import { Star, MapPin, CalendarHeart, ShieldCheck } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs: React.FC = () => {
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

  const features = [
    {
      icon: <Star size={32} />,
      title: "Unmatched Luxury",
      desc: "Every inch of our resort is designed to exude opulence, offering a truly 5-star experience."
    },
    {
      icon: <MapPin size={32} />,
      title: "Prime Location",
      desc: "Strategically located in Patna, providing easy access for local and out-of-town guests."
    },
    {
      icon: <CalendarHeart size={32} />,
      title: "All-in-One Venue",
      desc: "From pre-wedding shoots to accommodations and the main event, everything under one roof."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Flawless Execution",
      desc: "Our dedicated event planners and hospitality staff ensure your day goes off without a hitch."
    }
  ];

  return (
    <section className="why-us-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">The Elysian Promise</span>
          <h2 className="section-title">Why Choose Our Resort</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-box ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
