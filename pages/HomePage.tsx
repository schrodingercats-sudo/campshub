import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import ContactSection from '../components/ContactSection';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection>
        <WhyUsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
};

export default HomePage;