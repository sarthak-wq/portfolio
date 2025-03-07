import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-futuristic text-white px-4 md:px-16 lg:px-24 section">
      <div className="container py-4 mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold animate-breathing text-yellow-400">Sarthak</div>
          <div className="hidden md:flex justify-center items-center space-x-6">
            <div className="space-x-6">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="hover:text-neon-green transition-colors">Home</a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-neon-green transition-colors">AboutMe</a>
              <a href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')} className="hover:text-neon-green transition-colors">Experience</a>
              <a href="#project" onClick={(e) => handleSmoothScroll(e, 'project')} className="hover:text-neon-green transition-colors">Projects</a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-neon-green transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="mailto:sarthakd.work2@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                Hire me
              </button>
            </a>
            <button className="md:hidden p-3 hover:bg-gray-800 rounded-lg" onClick={toggleMenu}>
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center pt-4 pb-6 space-y-4`}>
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="w-full text-center py-2 bg-gray-800 hover:bg-gray-400 rounded-lg">Home</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="w-full text-center py-2 bg-gray-800 hover:bg-gray-800 rounded-lg">AboutMe</a>
          <a href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')} className="w-full text-center py-2 bg-gray-800 hover:bg-gray-800 rounded-lg">Experience</a>
          <a href="#project" onClick={(e) => handleSmoothScroll(e, 'project')} className="w-full text-center py-2 bg-gray-800 hover:bg-gray-800 rounded-lg">Projects</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="w-full text-center py-2 bg-gray-800 hover:bg-gray-800 rounded-lg">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;