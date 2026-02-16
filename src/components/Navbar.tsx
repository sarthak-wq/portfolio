import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';

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
      setIsMenuOpen(false); // Close drawer after clicking a link
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'project', label: 'Projects' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-50 py-4 shadow-md bg-backgroundDark text-textDark">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-3xl font-bold text-primary animate-fade-in">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="hover-underline-animated">
            Sarthak
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {menuItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="text-lg font-medium hover-underline-animated transform transition-transform duration-300 hover:scale-105"
            >
              {label}
            </a>
          ))}
          <a href="mailto:sarthakd.work2@gmail.com" target="_blank" rel="noopener noreferrer">
             <Button
              type="primary"
              className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover-lift border-none"
            >
              Hire Me
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <Button
            className="border-none text-textDark bg-transparent hover:text-primary"
            icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={<span style={{ color: '#E2E8F0' }}>Menu</span>}
        placement="right"
        onClose={toggleMenu}
        open={isMenuOpen}
        styles={{
          header: { backgroundColor: '#1a202c', borderBottom: '1px solid #333333' },
          body: { padding: 0, backgroundColor: '#1a202c', color: '#ffffff' }
        }}
        closeIcon={<CloseOutlined className="text-textDark" />}
      >
        <div className="flex flex-col space-y-6 p-6 items-center">
          {menuItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="text-xl font-medium hover:text-primary transition-colors duration-300 text-textDark"
            >
              {label}
            </a>
          ))}
          <a href="mailto:sarthakd.work2@gmail.com" target="_blank" rel="noopener noreferrer" className="mt-4">
            <Button
              type="primary"
              className="font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out bg-primary hover:bg-secondary text-white border-none"
            >
              Hire Me
            </Button>
          </a>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
