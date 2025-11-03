import React from 'react';
import { GithubIcon, InstagramIcon, LinkedInIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1e38]/30 border-t border-gray-800/50 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400 max-w-7xl">
        <p className="mb-4">&copy; 2025 Campus Hub. All Rights Reserved.</p>
        <div className="flex justify-center items-center space-x-6">
          <a href="#" className="hover:text-[#00F5D4] transition-colors duration-300"><LinkedInIcon /></a>
          <a href="#" className="hover:text-[#00F5D4] transition-colors duration-300"><GithubIcon /></a>
          <a href="#" className="hover:text-[#00F5D4] transition-colors duration-300"><InstagramIcon /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
