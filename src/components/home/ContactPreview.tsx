import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import './ContactPreview.css';

const ContactPreview: React.FC = () => {
  return (
    <section className="contact-preview-section section-padding">
      <div className="container">
        <div className="cp-wrapper glass-panel">
          <div className="cp-content">
            <h2>Ready to Plan Your Dream Event?</h2>
            <p>Our expert event planners are here to guide you through every detail.</p>
            
            <div className="cp-actions">
              <a href="/contact" className="btn-primary">Request an Enquiry</a>
              <div className="cp-buttons">
                <a href="tel:+919876543210" className="icon-link">
                  <PhoneCall size={20} />
                  <span>Call Us</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="cp-image">
            <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" alt="Event Planning" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
