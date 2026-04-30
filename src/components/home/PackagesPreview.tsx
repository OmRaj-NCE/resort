import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import './PackagesPreview.css';

const PackagesPreview: React.FC = () => {
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

  const previewPackage = {
    title: "The Royal Elite Wedding",
    price: "₹8.5 Lakhs Onwards",
    includes: [
      "Access to 3 Grand Venues for 2 Days",
      "Gourmet Catering for up to 500 Guests",
      "Bespoke Floral Decor & Lighting",
      "5 Luxury Suites for Family",
      "Dedicated Event Planner & Concierge"
    ]
  };

  return (
    <section className="packages-preview-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="packages-banner glass-panel-dark">
          <div className="banner-grid">
            <div className={`banner-content ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <span className="banner-subtitle">Curated Offerings</span>
              <h2>Discover Our Exclusive Wedding Packages</h2>
              <p>
                From intimate affairs to grand royal celebrations, our packages are designed 
                to provide a seamless, opulent experience. Transparent pricing, uncompromising quality.
              </p>
              
              <div className="featured-pack">
                <h3>{previewPackage.title}</h3>
                <p className="pack-price">{previewPackage.price}</p>
                <ul>
                  {previewPackage.includes.map((item, idx) => (
                    <li key={idx}>
                      <Check size={16} className="text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a href="/packages" className="btn-primary">Explore All Packages</a>
              </div>
            </div>
            
            <div className={`banner-images ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
               {/* 3 Image Stack/Slider simulation for Preview */}
               <div className="pack-img bottom-img">
                 <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" alt="Decor" referrerPolicy="no-referrer" />
               </div>
               <div className="pack-img middle-img">
                 <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" alt="Catering" referrerPolicy="no-referrer" />
               </div>
               <div className="pack-img top-img">
                 <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Venue" referrerPolicy="no-referrer" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;
