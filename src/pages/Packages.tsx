import React from 'react';
import './Packages.css';
import { Star } from 'lucide-react';

const Packages: React.FC = () => {
  const packages = [
    {
      title: "Silver Package",
      desc: "Perfect for intimate gatherings",
      price: "₹3.5 Lakhs",
      features: ["1 Day Venue Access", "Catering for 100 Guests", "Basic Decor Setup", "1 Standard Room"],
      level: "Basic"
    },
    {
      title: "Gold Package",
      desc: "The classic destination experience",
      price: "₹6.0 Lakhs",
      features: ["2 Days Venue Access", "Catering for 250 Guests", "Premium Theme Decor", "3 Executive Rooms", "DJ & Entertainment"],
      level: "Premium",
      featured: true
    },
    {
      title: "Diamond Package",
      desc: "The ultimate royal celebration",
      price: "₹10+ Lakhs",
      features: ["Exclusive Full Resort Access", "Gourmet Catering for 500+ Guests", "Bespoke Grand Decor", "10 Luxury Suites including Bridal", "Celebrity Entertainment Setup", "Dedicated Coordination Team"],
      level: "Royal"
    }
  ];

  return (
    <div className="packages-page">
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop)' }}>
        <div className="overlay"></div>
        <div className="header-content animate-slide-up">
          <h1>Exquisite Packages</h1>
          <p>Curated experiences tailored to your grandest visions.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`pkg-card ${pkg.featured ? 'featured' : ''} animate-slide-up`} style={{ animationDelay: `${idx * 0.2}s` }}>
              {pkg.featured && <div className="featured-badge"><Star size={14}/><span>Most Popular</span></div>}
              
              <div className="pkg-header">
                <span className="pkg-level">{pkg.level}</span>
                <h2>{pkg.title}</h2>
                <p>{pkg.desc}</p>
                <div className="pkg-price">{pkg.price}</div>
              </div>

              <div className="pkg-body">
                <ul>
                  {pkg.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="pkg-footer">
                <a href="/contact" className={pkg.featured ? 'btn-primary w-full' : 'btn-outline w-full'}>
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="custom-package mt-8 glass-panel animate-slide-up delay-500">
          <div className="custom-content">
            <h2>Need a Custom Package?</h2>
            <p>Our expert planners can build a bespoke package tailored exactly to your guest count, themes, and preferences.</p>
          </div>
          <a href="/contact" className="btn-primary">Talk to a Planner</a>
        </div>
      </div>
    </div>
  );
};

export default Packages;
