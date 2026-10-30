import React from 'react';

import northeasternImage from '../../assets/northeastern.jpg';
import accentureImage from '../../assets/accenture.jpg';
import itnetworkzImage from '../../assets/itnetworkz.jpg';
import collegeImage from '../../assets/college.jpg';
import nokiaImage from '../../assets/nokia.jpg';

interface TimelineEvent {
  company: string;
  position: string;
  date: string;
  description?: string;
  image?: string;
}

const events: TimelineEvent[] = [
  {
    company: 'Northeastern University',
    position: 'Master’s Student',
    date: 'Sep 2024 - Aug 2026 (expected)',
    description: 'Pursuing a Master’s degree in Information Systems.',
    image: northeasternImage,
  },
  {
    company: 'Nokia',
    position: 'AI Engineer Intern',
    date: 'Sep 2025 - Dec 2025',
    description:
      'Engineered backend AI agents with Python and LangChain, built scalable microservices, and optimized Postgres vector queries. Shipped React and Next.js interfaces for human-in-the-loop oversight across distributed systems.',
    image: nokiaImage,
  },
  {
    company: 'Accenture',
    position: 'Software Engineer',
    date: 'Jun 2021 - Jul 2024',
    description:
      'Developed full-stack solutions with React, AngularJS, .NET, Python, AWS, and Azure; optimized operations and improved the user experience.',
    image: accentureImage,
  },
  {
    company: 'IT-Networks Infosystems',
    position: 'Software Engineer Intern',
    date: 'Jul 2020 - Mar 2021',
    description:
      'Built full-stack web applications with PHP and MySQL, improving system scalability, security, and user engagement.',
    image: itnetworkzImage,
  },
  {
    company: 'Nagpur University',
    position: 'Bachelor of Engineering, Computer Science',
    date: 'Aug 2017 - Apr 2021',
    description: 'Completed a Bachelor of Engineering in Computer Science.',
    image: collegeImage,
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="section container" id="timeline">
      <div className="head" data-reveal>
        <h2 className="head__title">Where I&rsquo;ve been</h2>
      </div>

      <div className="cv">
        {events.map((event, i) => (
          <article className="cv__row" key={event.company} data-reveal style={{ '--i': i } as React.CSSProperties}>
            <div className="cv__mark">
              {event.image && <img src={event.image} alt="" width={72} height={72} loading="lazy" />}
            </div>
            <div>
              <h3 className="cv__org">{event.company}</h3>
              <span className="cv__date">{event.date}</span>
            </div>
            <div>
              <p className="cv__role">{event.position}</p>
              {event.description && <p className="cv__desc">{event.description}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
