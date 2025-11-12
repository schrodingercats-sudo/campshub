import React from 'react';
import AboutUsSection from '../components/AboutUsSection';
import TeamSection from '../components/TeamSection';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <>
      <AnimatedSection>
        <AboutUsSection />
      </AnimatedSection>
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
