import React, { useState } from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const photos = [
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop', category: 'Weddings' },
    { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1542314831-c6a420324869?q=80&w=2070&auto=format&fit=crop', category: 'Resort' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop', category: 'Weddings' },
    { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop', category: 'Resort' },
    { src: 'https://images.unsplash.com/photo-1530103862676-de88b325c9ab?q=80&w=2070&auto=format&fit=crop', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop', category: 'Weddings' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop', category: 'Resort' },
  ];

  const filters = ['All', 'Weddings', 'Events', 'Resort'];

  const filteredPhotos = activeFilter === 'All' 
    ? photos 
    : photos.filter(p => p.category === activeFilter);

  return (
    <div className="gallery-page">
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop)' }}>
        <div className="overlay"></div>
        <div className="header-content animate-slide-up">
          <h1>Moments Frozen in Time</h1>
          <p>A glimpse into the magical experiences crafted at Elysian.</p>
        </div>
      </div>

      <div className="container section-padding">
        
        {/* Videos Section */}
        <div className="videos-section">
          <h2 className="section-title">Cinematic Highlights</h2>
          <div className="video-scroll-container">
            {/* Simulating video thumbnails */}
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="video-card">
                <div className="video-thumbnail">
                   <img src={`https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&sig=${i}`} alt="Video Thumbnail" referrerPolicy="no-referrer" />
                   <div className="play-btn">▶</div>
                </div>
                <h3>The Grand Indian Wedding</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="photos-section mt-8">
          <h2 className="section-title">Photo Gallery</h2>
          
          <div className="filter-tabs">
            {filters.map(filter => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="masonry-grid animate-fade-in">
            {filteredPhotos.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img src={photo.src} alt={photo.category} loading="lazy" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
