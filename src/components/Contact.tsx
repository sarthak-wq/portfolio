import React from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div
      className={`py-20 ${isDarkMode ? 'bg-backgroundDark text-textDark' : 'bg-backgroundLight text-textLight'}`}
      id="contact"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-primary animate-fade-in"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={sectionItemVariants}
        >
          Contact Me
        </motion.h2>
        <div className="flex justify-center">
          <motion.div
            className="w-full md:w-2/3 lg:w-1/2 text-center"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={sectionItemVariants}
          >
            <motion.h3
              className="text-3xl font-bold text-secondary mb-4 animate-slide-up"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={sectionItemVariants}
            >
              Let's Connect
            </motion.h3>
            <p className="text-lg leading-relaxed mb-10">
              I'm always open to discussing new opportunities, collaborations, or just saying hello. Feel free to reach out!
            </p>
            <motion.div
              className={`p-8 rounded-lg shadow-lg mx-auto ${isDarkMode ? 'bg-cardDark' : 'bg-cardLight'} hover-grow transition-all duration-300`}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="mb-5 flex flex-col sm:flex-row items-center justify-center md:justify-start">
                <FaEnvelope className="inline-block text-primary mr-3 text-2xl mb-2 sm:mb-0" />
                <a href="mailto:sarthakd.work2@gmail.com" target="_blank" rel="noopener noreferrer" className="hover-underline-animated text-lg font-medium text-center sm:text-left">
                  deshmukh.sar@northeastern.edu
                </a>
              </div>
              <div className="mb-5 flex flex-col sm:flex-row items-center justify-center md:justify-start">
                <FaLinkedin className="inline-block text-primary mr-3 text-2xl mb-2 sm:mb-0" />
                <a href="http://www.linkedin.com/in/sarthakdeshmukh1999" target="_blank" rel="noopener noreferrer" className="hover-underline-animated text-lg font-medium text-center sm:text-left">
                  linkedin.com/in/sarthakdeshmukh1999
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
                <FaMapMarkedAlt className="inline-block text-primary mr-3 text-2xl mb-2 sm:mb-0" />
                <span className="text-lg font-medium text-center sm:text-left">Boston, Massachusetts, United States</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;