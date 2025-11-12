import React from 'react';
import ServicesSection from '../components/ServicesSection';
import AnimatedSection from '../components/AnimatedSection';

const ServicesPage: React.FC = () => {
  return (
    <AnimatedSection>
      <ServicesSection />
    </AnimatedSection>
  );
};

export default ServicesPage;