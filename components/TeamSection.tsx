import React from 'react';

const teamMembers = [
  { name: 'Shiven' },
  { name: 'Saumil' },
  { name: 'Sachi' },
  { name: 'Preet' },
  { name: 'Vinayak Sir' },
  { name: 'Akshar Sir' },
];

const TeamCard: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-[#1e1e38]/50 p-8 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-[#00F5D4]/50 hover:shadow-lg hover:-translate-y-2 hover:shadow-[#00F5D4]/10">
    <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-[#00F5D4]">Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;