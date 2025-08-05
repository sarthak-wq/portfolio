import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.footer
      className={`py-12 ${isDarkMode ? 'bg-cardDark text-textDark' : 'bg-cardLight text-textLight'}`}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <motion.div className="mb-6 md:mb-0" variants={fadeInVariants}>
            <h3 className="text-3xl font-bold text-primary mb-2">Sarthak</h3>
            <p className="text-sm text-textLight dark:text-gray-400 max-w-sm">
              Full-Stack Developer, crafting seamless web and software experiences that push boundaries and solve real-world challenges.
            </p>
          </motion.div>

          <motion.div className="flex flex-col items-center md:items-start" variants={fadeInVariants}>
            <h4 className="text-xl font-semibold mb-4 text-secondary">Connect With Me</h4>
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/sarthakdeshmukh1999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight dark:text-textDark hover:text-primary transform transition-transform duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/sarthak-wq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight dark:text-textDark hover:text-primary transform transition-transform duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:sarthakd.work2@gmail.com"
                className="text-textLight dark:text-textDark hover:text-primary transform transition-transform duration-300 hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-300 dark:border-gray-700 pt-6 mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-textLight dark:text-gray-400"
          variants={fadeInVariants}
        >
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Sarthak. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover-underline-animated hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover-underline-animated hover:text-primary">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;