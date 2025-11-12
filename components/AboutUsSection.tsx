import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="py-20 px-4">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About <span className="text-[#00F5D4]">Us</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Campus Hub is a student-led organization dedicated to providing high-quality academic and technical services to our peers. Our mission is to empower students to excel in their studies by offering a wide range of services, from project creation to presentation design.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
