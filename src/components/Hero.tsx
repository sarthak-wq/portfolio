import React from 'react';
import HeroImage from '/assets/mypic.jpg';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.05, // Stagger delay for each child word
        delayChildren: 0.5, // Delay before the first word starts animating
      }
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 100 }, // Slide from right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1 } },
  };

  const heroImageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.8, ease: 'easeOut' } },
  };

  const greeting = "Hi, I'm ".split(' ');
  const name = "Sarthak Deshmukh".split(' ');
  const roleDescription = "A passionate Full-Stack Developer crafting intuitive and efficient digital experiences.".split(' ');

  return (
    <div
      id="home"
      className={`relative min-h-screen flex items-center justify-center py-20 overflow-hidden
        ${isDarkMode ? 'text-textDark' : 'text-textLight'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {greeting.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
                {word}
              </motion.span>
            ))}
            <span className="text-primary inline-block"> {/* For Sarthak Deshmukh to be primary color */}
              {name.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 text-xl lg:text-2xl font-light animate-slide-up"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {roleDescription.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
                  {word}
            </motion.span>
            ))}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
            variants={buttonContainerVariants} // Use new buttonContainerVariants
            initial="hidden"
            animate="visible"
          >
            <a href="https://www.linkedin.com/in/sarthakdeshmukh1999" target="_blank" rel="noopener noreferrer">
              <Button
                type="primary"
                className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover-lift flex items-center space-x-2"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </Button>
            </a>
            <a href="https://github.com/sarthak-deshmukh1999" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-cardDark hover:bg-gray-700 text-textDark dark:bg-cardLight dark:hover:bg-gray-200 dark:text-textLight font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover-lift flex items-center space-x-2"
              >
                <FaGithub /> <span>GitHub</span>
              </Button>
            </a>
            <a href="/Sarthak_Deshmukh_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-accent hover:bg-yellow-600 text-textLight dark:text-textDark font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover-lift flex items-center space-x-2"
              >
                <FaFileAlt /> <span>Resume</span>
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Image/Visual Element with Circular Border */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center relative"
          variants={imageContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary flex items-center justify-center z-10"> 
            {/* Circular Border Animation */}
            <div
              className={
                `absolute inset-[-4px] rounded-full custom-border-animation ${isDarkMode ? 'dark-mode-border' : 'light-mode-border'}`
              }
            ></div>
            <motion.img
              src={HeroImage}
              alt="Sarthak Deshmukh"
              className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl"
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;