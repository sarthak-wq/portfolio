import React from 'react';
import HeroImage from '/assets/mypic.jpg';
import { Button } from 'antd';
import { CSSTransition } from 'react-transition-group';
import './../styles/Hero.css';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div className={`text-center py-16 section ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <img
          src={HeroImage}
          alt="Sarthak Deshmukh"
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold">
          I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
            Sarthak Deshmukh
          </span>
          , Full-Stack Developer
        </h1>
        <p className="mt-4 text-lg">
          Building digital experiences that might not always be flashy, but definitely make life a whole lot easier.
        </p>
        <div className="mt-8 space-x-4">
          <a href="https://www.linkedin.com/in/sarthakdeshmukh1999" target="_blank" rel="noopener noreferrer">
            <Button type="primary" className="transform transition-transform duration-300 hover:scale-105">
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/sarthak-wq" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105">
              Github
            </Button>
          </a>
          <a href="/Sarthak_Deshmukh_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105">
              Resume
            </Button>
          </a>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Hero;
