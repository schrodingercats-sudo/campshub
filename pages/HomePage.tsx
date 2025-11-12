import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;