import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const allSkills = [
    "React", "AngularJS", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS",
    ".NET Core", "Node.js", "Express.js", "Python", "Java", "ASP.NET", "RESTful APIs",
    "MongoDB", "SQL Server", "PostgreSQL", "MySQL",
    "AWS", "Azure DevOps", "Docker", "Git", "CI/CD",
    "Agile/Scrum", "Jira", "Postman", "VS Code"
  ];

  const sectionItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div
      className={`py-20 ${isDarkMode ? 'bg-backgroundDark text-textDark' : 'bg-backgroundLight text-textLight'}`}
      id="about"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-primary animate-fade-in"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={sectionItemVariants}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
          <motion.div
            className="flex-1 space-y-6 mb-10 md:mb-0"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={sectionItemVariants}
          >
            <motion.p className="text-xl leading-relaxed mb-6"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={sectionItemVariants}>
              I’m <span className="font-semibold text-primary">Sarthak Deshmukh</span>, a Full-Stack Developer and AI enthusiast, currently pursuing my Master’s in Information Systems at Northeastern University. With over three years of experience at Accenture, I specialize in building robust software solutions with technologies like <span className="font-semibold text-secondary">React, .NET, Python, and cloud platforms like AWS and Azure</span>. My passion lies in leveraging cutting-edge technologies to create intuitive user experiences and solve complex real-world problems, constantly seeking opportunities to learn, grow, and contribute to impactful projects.
            </motion.p>
            <motion.div
              className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-cardDark' : 'bg-cardLight'} hover-grow transition-all duration-300`}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <h3 className="text-3xl font-bold text-center text-primary mb-4">3+</h3>
              <p className="text-center text-lg font-medium">Years of Industry Experience</p>
            </motion.div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-cardDark' : 'bg-cardLight'} hover-lift transition-all duration-300`}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <h3 className="text-xl font-bold text-secondary mb-4 border-b-2 border-primary pb-2">
                Technologies & Tools
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-none p-0">
                {allSkills.map((skill, index) => (
                  <li key={index} className="text-lg flex items-center">
                    <span className="mr-2 text-primary">&#8226;</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;