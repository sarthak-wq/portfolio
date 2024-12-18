import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-4 md:px-16 lg:px-24">
      <div className="container py-4 mx-auto">
        {/* Desktop and Mobile Header */}
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold animate-breathing">Sarthak</div>          

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center space-x-6">
            <div className="space-x-6">
              <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-gray-400 transition-colors">AboutMe</a>
              <a href="#project" className="hover:text-gray-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
            </div>            
          </div>          
          
          <div className="flex items-center space-x-3">
            {/* Hire Me Button */}
            <a href="mailto:sarthakd.work2@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white
                transform transition-transform duration-300 hover:scale-105 
                px-4 py-2 rounded-full">
                Hire me
              </button>
            </a>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button 
              className="md:hidden p-3 hover:bg-gray-800 rounded-lg"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>       
          
        </div>       

        {/* Mobile Navigation Menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center pt-4 pb-6 space-y-4`}>
          <a href="#home" className="w-full text-center py-2 bg-gray-800 hover:bg-gray-400 rounded-lg">Home</a>
          <a href="#about" className="w-full text-center py-2 bg-gray-800 hover:bg-gray-800 rounded-lg">AboutMe</a>
          <a href="#project" className="w-full text-center py-2 bg-gray-800 hover:bg-gray-800 rounded-lg">Projects</a>
          <a href="#contact" className="w-full text-center py-2 bg-gray-800 hover:bg-gray-800 rounded-lg">Contact</a>          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;