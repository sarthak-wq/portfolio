import React from 'react';
import HeroImage from '/assets/mypic.jpg';

const Hero: React.FC = () => {
  return (
    <div className="bg-futuristic text-white text-center py-16 section">
      <img
        src={HeroImage}
        alt="Sarthak Deshmukh"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm {' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
          Sarthak Deshmukh
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Building digital experiences that might not always be flashy, but definitely make life a whole lot easier.
      </p>
      <div className="mt-8 space-x-4">
        <a href="https://www.linkedin.com/in/sarthakdeshmukh1999" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            LinkedIn
          </button>
        </a>
        <a href="https://github.com/sarthak-wq" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Github
          </button>
        </a>
        <a href="/Sarthak_Deshmukh_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
