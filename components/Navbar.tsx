import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const location = useLocation();
  const isSolid = isScrolled || location.pathname !== '/';

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Why Us?', to: '/why-us' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSolid ? 'bg-[#1e1e38] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-[#00F5D4]">[CH]</span> Campus Hub
        </Link>
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
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Navbar;