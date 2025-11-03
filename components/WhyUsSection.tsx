import React from 'react';

const benefits = [
  {
    title: 'Innovation & Quality',
    description: 'We deliver cutting-edge ideas and meticulously crafted work that goes beyond the brief.',
  },
  {
    title: 'Student-Centric',
    description: 'Designed by students, for students. We understand your challenges and speak your language.',
  },
  {
    title: 'Reliable & On-Time',
    description: 'Count on us for professional communication and timely delivery, every single time.',
  },
];

const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 px-4 bg-[#1e1e38]/30">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          More Than a Service. <span className="text-[#00F5D4]">We're Your Partner in Success.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <h3 className="text-2xl font-bold mb-3 text-[#00F5D4]">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
