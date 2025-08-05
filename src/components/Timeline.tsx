import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import timeline images
import northeasternImage from '/assets/northeastern.jpg';
import accentureImage from '/assets/accenture.jpg';
import itnetworkzImage from '/assets/itnetworkz.jpg';
import collegeImage from '/assets/college.jpg';

interface TimelineEvent {
  company: string;
  position: string;
  date: string;
  description?: string;
  image?: string; // Added image property
}

interface TimelineProps {
  isDarkMode: boolean;
}

const events: TimelineEvent[] = [
  { 
    company: 'Northeastern University', 
    position: 'Master’s Student', 
    date: 'Sep. 2024 - Graduating April 2026', 
    description: 'Pursuing Master’s degree in Information Systems.',
    image: northeasternImage
  },
  { 
    company: 'Accenture', 
    position: 'Software Engineer', 
    date: 'June 2021 – July 2024', 
    description: 'Developed full-stack solutions with React, AngularJS, .NET, Python, AWS, and Azure; optimized operations and enhanced user experience.',
    image: accentureImage
  },
  { 
    company: 'IT-Networks Infosystems', 
    position: 'Software Engineer Intern', 
    date: 'July 2020 – March 2021', 
    description: 'Built full-stack web applications using PHP and MySQL, improving system scalability, security, and user engagement.',
    image: itnetworkzImage
  },
  { 
    company: 'Nagpur University', 
    position: 'Bachelor of Engineering in Computer Science', 
    date: 'August 2017 - April 2021', 
    description: 'Completed Bachelor of Engineering in Computer Science.',
    image: collegeImage
  },
];

const Timeline: React.FC<TimelineProps> = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div
      className={`py-20 ${isDarkMode ? 'bg-backgroundDark text-textDark' : 'bg-backgroundLight text-textLight'}`}
      id="timeline"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-primary animate-fade-in"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Experience & Education
        </motion.h2>
        <div className="space-y-8 flex flex-col items-center">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="w-full max-w-2xl"
              variants={sectionItemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={index}
            >
              <div className={`p-5 rounded-lg shadow-lg ${isDarkMode ? 'bg-cardDark' : 'bg-cardLight'} hover-lift transition-all duration-300 flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {event.image && (
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                    <img src={event.image} alt={event.company} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1 text-secondary">{event.company}</h3>
                  <p className="text-lg font-semibold mb-1">{event.position}</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm italic mb-3`}>{event.date}</p>
                  {event.description && (
                    <p className="mt-2 text-base leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;