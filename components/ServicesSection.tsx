import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, DocumentIcon, PresentationIcon, WandIcon } from './icons';

const services = [
  {
    Icon: CodeIcon,
    title: 'Project Creation',
    description: 'Custom technical and creative projects built from scratch to meet your exact requirements.',
  },
  {
    Icon: DocumentIcon,
    title: 'Reports & Docs',
    description: 'Professionally written reports and documentation to clearly explain your work and secure top marks.',
  },
  {
    Icon: PresentationIcon,
    title: 'Presentation Design',
    description: 'Sleek, engaging presentations designed to captivate your audience and showcase your findings.',
  },
  {
    Icon: WandIcon,
    title: 'On-Demand Tasks',
    description: 'Need something else? We handle all types of paid academic and tech-based tasks on request.',
  },
];

const ServiceCard: React.FC<{ Icon: React.ElementType; title: string; description: string }> = ({ Icon, title, description }) => (
  <motion.div
    className="bg-[#1e1e38]/50 p-8 rounded-lg border border-gray-700/50"
    whileHover={{ scale: 1.05, y: -10, boxShadow: '0 0 20px #00F5D4', borderColor: '#00F5D4' }}
    transition={{ duration: 0.3 }}
  >
    <div className="mb-4 text-[#00F5D4]">
      <Icon />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Whatever the Task, <span className="text-[#00F5D4]">We've Got You Covered.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;