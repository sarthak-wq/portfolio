import React from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Drawer, Switch } from 'antd';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  return (
    <nav className={`px-4 md:px-16 lg:px-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container py-4 mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Sarthak</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="hover:text-blue-500">Home</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-blue-500">About Me</a>
          <a href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')} className="hover:text-blue-500">Experience</a>
          <a href="#project" onClick={(e) => handleSmoothScroll(e, 'project')} className="hover:text-blue-500">Projects</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-blue-500">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <Switch checked={isDarkMode} onChange={toggleDarkMode} checkedChildren="Dark" unCheckedChildren="Light" />
          <Button type="primary" href="mailto:sarthakd.work2@gmail.com" target="_blank">
            Hire Me
          </Button>
          <Button className="md:hidden" icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />} onClick={toggleMenu} />
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleMenu}
        open={isMenuOpen}
        styles={{ body: { padding: 0 } }}
      >
        <div className="flex flex-col space-y-4 p-4">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="hover:text-blue-500">Home</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-blue-500">About Me</a>
          <a href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')} className="hover:text-blue-500">Experience</a>
          <a href="#project" onClick={(e) => handleSmoothScroll(e, 'project')} className="hover:text-blue-500">Projects</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-blue-500">Contact</a>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;