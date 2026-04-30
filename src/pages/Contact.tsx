import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    guestCount: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Thank you for your enquiry. Our planning team will contact you shortly.");
    setFormData({name: '', phone: '', eventType: 'Wedding', guestCount: '', date: '', message: ''});
  };

  return (
    <div className="contact-page">
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-c6a420324869?q=80&w=2070&auto=format&fit=crop)' }}>
        <div className="overlay"></div>
        <div className="header-content animate-slide-up">
          <h1>Get in Touch</h1>
          <p>Let's begin planning your extraordinary event.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="contact-layout">
          
          {/* Info Side */}
          <div className="contact-info-side animate-slide-up">
            <h2 className="section-title">Contact Information</h2>
            <p className="contact-intro">
              Whether you are planning a grand wedding or an intimate gathering, our team is at your disposal to make it flawless.
            </p>
            
            <div className="info-cards">
              <div className="info-card">
                <MapPin className="text-gold" size={24} />
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Elite Avenue, Resort Corridor<br/>Patna, Bihar 800001</p>
                </div>
              </div>
              <div className="info-card">
                <Phone className="text-gold" size={24} />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210<br/>+91 98765 01234</p>
                </div>
              </div>
              <div className="info-card">
                <Mail className="text-gold" size={24} />
                <div>
                  <h4>Email Us</h4>
                  <p>reservations@elysianresorts.in<br/>events@elysianresorts.in</p>
                </div>
              </div>
              <div className="info-card">
                <Clock className="text-gold" size={24} />
                <div>
                  <h4>Operating Hours</h4>
                  <p>Open 24/7 for Guests<br/>Planning Office: 9 AM - 7 PM</p>
                </div>
              </div>
            </div>
            
            {/* Map Embed */}
            <div className="map-container">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107255152!2d85.06064035652591!3d25.608175570498774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3facd6e00185!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Location Map"
               ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-side animate-slide-up delay-200">
            <div className="form-wrapper glass-panel">
              <h3>Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="custom-form">
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 xxxxx xxxxx" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventType">Event Type</label>
                    <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Party">Private Party</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="guestCount">Est. Guests</label>
                    <input type="number" id="guestCount" name="guestCount" value={formData.guestCount} onChange={handleChange} placeholder="e.g. 500" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Special Requirements</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your theme, preferences, or any specific needs..."></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <span>Send Enquiry</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
