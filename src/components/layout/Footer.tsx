import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <h2>Elysian<span>.</span></h2>
              </div>
              <p className="footer-desc">
                Where Dream Weddings Turn Into Timeless Memories. The finest destination for luxury events and 
                premium hospitality in Patna, Bihar.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              </div>
            </div>

            <div className="footer-col links-col">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/#about">About Resort</Link></li>
                <li><Link to="/#weddings">Destination Weddings</Link></li>
                <li><Link to="/packages">Exquisite Packages</Link></li>
                <li><Link to="/gallery">Gallery & Moments</Link></li>
                <li><Link to="/#rooms">Luxury Stays</Link></li>
              </ul>
            </div>

            <div className="footer-col contact-col">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <MapPin size={18} className="text-gold" />
                  <span>123 Elite Avenue, Resort Corridor, Patna, Bihar 800001</span>
                </li>
                <li>
                  <Phone size={18} className="text-gold" />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <Mail size={18} className="text-gold" />
                  <span>reservations@elysianresorts.in</span>
                </li>
              </ul>
            </div>

            <div className="footer-col newsletter-col">
              <h3>Newsletter</h3>
              <p>Subscribe for exclusive updates and seasonal offers.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" required />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>&copy; {new Date().getFullYear()} Elysian Resorts & Venues. All Rights Reserved.</p>
            <div className="legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
