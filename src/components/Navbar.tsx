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
      setIsMenuOpen(false); // Close drawer after clicking a link
    }
  };

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  return (
    <nav className={`fixed w-full z-50 py-4 shadow-md ${isDarkMode ? 'bg-backgroundDark text-textDark' : 'bg-cardLight text-textLight'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-3xl font-bold text-primary animate-fade-in">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="hover-underline-animated">
            Sarthak
          </a>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {['home', 'about', 'timeline', 'project', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="text-lg font-medium hover-underline-animated transform transition-transform duration-300 hover:scale-105"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            className="ml-4"
          />
          <Button
            type="primary"
            href="mailto:sarthakd.work2@gmail.com"
            target="_blank"
            className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover-lift"
          >
            Hire Me
          </Button>
        </div>
        <div className="flex items-center md:hidden">
          <Switch checked={isDarkMode} onChange={toggleDarkMode} checkedChildren="Dark" unCheckedChildren="Light" className="mr-4" />
          <Button
            className={`border-none ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}
            icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <Drawer
        title={<span style={{ color: isDarkMode ? '#E2E8F0' : '#333333' }}>Menu</span>}
        placement="right"
        onClose={toggleMenu}
        open={isMenuOpen}
        styles={{
          header: { backgroundColor: isDarkMode ? '#1a202c' : '#ffffff', borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #f0f0f0' },
          body: { padding: 0, backgroundColor: isDarkMode ? '#1a202c' : '#ffffff', color: isDarkMode ? '#ffffff' : '#333333' }
        }}
        closeIcon={<CloseOutlined className={isDarkMode ? 'text-textDark' : 'text-textLight'} />}
      >
        <div className="flex flex-col space-y-6 p-6 items-center">
          {['home', 'about', 'timeline', 'project', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className={`text-xl font-medium hover:text-primary transition-colors duration-300 ${isDarkMode ? 'text-textDark' : 'text-textLight'}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Button
            type="primary"
            href="mailto:sarthakd.work2@gmail.com"
            target="_blank"
            className={`font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out mt-4 ${isDarkMode ? 'bg-primaryDark hover:bg-secondaryDark text-textDark' : 'bg-primary hover:bg-secondary text-white'}`}
          >
            Hire Me
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;