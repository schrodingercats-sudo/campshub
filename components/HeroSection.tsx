
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
      <div className="absolute top-0 left-0 w-full h-full bg-[#1A1A2E] z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E94560]/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00F5D4]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#1A1A2E]/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Stuck on a Project? We're Your <span className="text-[#00F5D4]">Academic Lifeline.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          From complex coding projects to standout presentations, Campus Hub delivers the custom, high-quality work you need to ace your semester.
        </p>
        <Link to="/services" className="bg-[#00F5D4] text-[#1A1A2E] font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#00F5D4]">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;