import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import timeline images
import northeasternImage from '../../assets/northeastern.jpg';
import accentureImage from '../../assets/accenture.jpg';
import itnetworkzImage from '../../assets/itnetworkz.jpg';
import collegeImage from '../../assets/college.jpg';
import nokiaImage from '../../assets/nokia.jpg';
import timelinebgimage from '../../assets/photo8.jpeg';

interface TimelineEvent {
  company: string;
  position: string;
  date: string;
  description?: string;
  image?: string;
  themeColor: string;
  textColor: string;
}

interface TimelineProps {
  isDarkMode: boolean;
}

const events: TimelineEvent[] = [
  { 
    company: 'Northeastern University', 
    position: 'Master’s Student', 
    date: 'Sep. 2024 - Graduating August 2026', 
    description: 'Pursuing Master’s degree in Information Systems.',
    image: northeasternImage,
    themeColor: '#C8102E', // Northeastern Red
    textColor: '#ffffff'
  },
  { 
    company: 'Nokia', 
    position: 'AI Engineer Intern', 
    date: 'Sep 2025 – Dec 2025', 
    description: 'Engineered backend AI agents using Python and LangChain. Architected scalable microservices and optimized Postgres vector queries. Implemented responsive Frontend interfaces using React and Next.js for human-in-the-loop oversight, ensuring compliance across distributed systems.',
    image: nokiaImage,
    themeColor: '#0056b3',
    textColor: '#ffffff'
  },
  { 
    company: 'Accenture', 
    position: 'Software Engineer', 
    date: 'June 2021 – July 2024', 
    description: 'Developed full-stack solutions with React, AngularJS, .NET, Python, AWS, and Azure; optimized operations and enhanced user experience.',
    image: accentureImage,
    themeColor: '#A100FF',
    textColor: '#ffffff'
  },
  { 
    company: 'IT-Networks Infosystems', 
    position: 'Software Engineer Intern', 
    date: 'July 2020 – March 2021', 
    description: 'Built full-stack web applications using PHP and MySQL, improving system scalability, security, and user engagement.',
    image: itnetworkzImage,
    themeColor: '#9bbb18',
    textColor: '#ffffff'
  },
  { 
    company: 'Nagpur University', 
    position: 'Bachelor of Engineering in Computer Science', 
    date: 'August 2017 - April 2021', 
    description: 'Completed Bachelor of Engineering in Computer Science.',
    image: collegeImage,
    themeColor: '#C04000',
    textColor: '#ffffff'
  },
];

const Timeline: React.FC<TimelineProps> = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      className={`py-20 relative overflow-hidden`}
      id="timeline"
      ref={ref}
      style={{
        backgroundImage: `url(${timelinebgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Removed the overlay div */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="w-full lg:max-w-5xl" 
              variants={sectionItemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={index}
            >
              <div 
                className={`p-6 lg:p-8 rounded-xl shadow-xl hover-lift transition-all duration-300 flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ backgroundColor: event.themeColor, color: event.textColor }}
              >
                {event.image && (
                  <div className="flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-md bg-white">
                    <img src={event.image} alt={event.company} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: event.textColor }}>{event.company}</h3>
                  <p className="text-xl font-semibold mb-2 opacity-95" style={{ color: event.textColor }}>{event.position}</p>
                  <p className="text-sm italic mb-4 opacity-90" style={{ color: event.textColor }}>{event.date}</p>
                  {event.description && (
                    <p className="text-lg leading-relaxed opacity-95" style={{ color: event.textColor }}>
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