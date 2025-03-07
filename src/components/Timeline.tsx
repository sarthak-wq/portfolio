import React from 'react';

interface TimelineEvent {
  company: string;
  position: string;
  date: string;
  description?: string[];
}

const events: TimelineEvent[] = [
  { company: 'Northeastern University', position: 'Master’s Student', date: 'Sep. 2024 - Graduating April 2026', description: ['Pursuing Master’s degree in Information Systems.'] },
  { company: 'Accenture', position: 'Software Engineer', date: 'June 2021 – July 2024', description: ['Developed features for a chatbot application with React, AngularJS integrated with Azure and SQL Server.', 'Improved operational efficiency, reducing task completion time by 2 hours per team member.', 'Collaborated with cross-functional teams to enhance Microsoft Bot Framework, resulting in a 10% reduction in response time for customer inquiries.', 'Implemented Azure cloud-based solutions for data storage and processing, optimizing cost and performance for client projects.'] },
  { company: 'IT-Networks Infosystems', position: 'Software Engineer Intern', date: 'Jan. 2019 – March 2021', description: ['Developed full-stack web applications using PHP and MySQL, improving system scalability and security.', 'Played a key role in creating and maintaining data-driven solutions to enhance user engagement by 20%.', 'Applied principles of site reliability engineering to ensure high uptime and performance of web applications.', 'Collaborated with the UI/UX team to design intuitive user interfaces using Material-UI.'] },
  { company: 'Nagpur University', position: 'Bachelor of Engineering in Computer Science', date: 'August 2017 - April 2021', description: ['Completed Bachelor of Engineering in Computer Science.'] },
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container bg-futuristic text-white py-20" id="timeline">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Experience/Education</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-neon-green"></div>
          {events.map((event, index) => (
            <div key={index} className={`timeline-event mb-8 flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="timeline-content bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-5/12 mx-4">
                <h3 className="text-2xl font-bold mb-2 text-green-400">{event.company}</h3>
                <p className="text-lg mb-2">{event.position}</p>
                <p className="text-gray-400">{event.date}</p>
                {event.description && (
                  <ul className="list-none text-gray-300 mt-4">
                    {event.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neon-green mr-2 mt-0.2">•</span> {desc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="checkpoint absolute left-1/2 transform -translate-x-1/2 bg-neon-green w-6 h-6 rounded-full border-4 border-black animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
