import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Why Us?', to: '/why-us' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isSolid = isScrolled || location.pathname !== '/';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSolid ? 'bg-[#1e1e38] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-white z-50">
          <span className="text-[#00F5D4]">[CH]</span> Campus Hub
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.to} 
              className={({ isActive }) => 
                `transition-colors duration-300 font-medium ${isActive ? 'text-[#00F5D4]' : 'text-gray-300 hover:text-[#00F5D4]'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-block bg-[#00F5D4] text-[#1A1A2E] font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-all duration-300 hover:shadow-[0_0_15px_#00F5D4]">
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#1e1e38] shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            <nav className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-lg transition-colors duration-300 ${isActive ? 'text-[#00F5D4]' : 'text-gray-300 hover:text-[#00F5D4]'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/contact" className="mt-4 bg-[#00F5D4] text-[#1A1A2E] font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300">
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;