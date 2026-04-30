import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import WeddingExperience from '../components/home/WeddingExperience';
import EventCategories from '../components/home/EventCategories';
import PackagesPreview from '../components/home/PackagesPreview';
import RoomsPreview from '../components/home/RoomsPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import ContactPreview from '../components/home/ContactPreview';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <WeddingExperience />
      <EventCategories />
      <PackagesPreview />
      <RoomsPreview />
      <WhyChooseUs />
      <Testimonials />
      <ContactPreview />
      <Footer />
    </div>
  );
};

export default Home;
