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
            className="text-textLight dark:text-textDark border-none"
            icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleMenu}
        open={isMenuOpen}
        styles={{ body: { padding: 0 } }}
        className={isDarkMode ? 'bg-backgroundDark text-textDark' : 'bg-cardLight text-textLight'}
      >
        <div className="flex flex-col space-y-6 p-6">
          {['home', 'about', 'timeline', 'project', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="text-xl font-medium text-textLight dark:text-textDark hover:text-primary transition-colors duration-300"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Button
            type="primary"
            href="mailto:sarthakd.work2@gmail.com"
            target="_blank"
            className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out mt-4"
          >
            Hire Me
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;