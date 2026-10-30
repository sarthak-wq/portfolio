import React from 'react';

import northeasternImage from '../../assets/northeastern.jpg';
import accentureImage from '../../assets/accenture.jpg';
import itnetworkzImage from '../../assets/itnetworkz.jpg';
import collegeImage from '../../assets/college.jpg';
import nokiaImage from '../../assets/nokia.jpg';
import sapLogo from '../../assets/SAP_logo.svg';

interface TimelineEvent {
  company: string;
  position: string;
  date: string;
  location?: string;
  description?: string;
  image?: string;
  monogram?: string;
  logo?: boolean;
}

const events: TimelineEvent[] = [
  {
    company: 'SAP',
    position: 'AI Engineer',
    date: 'Jul 2026 - Present',
    location: 'SAP Headquarters, Newtown Square, Philadelphia, PA',
    image: sapLogo,
    logo: true,
  },
  {
    company: 'Northeastern University',
    position: 'Master of Science, Computer Science',
    date: 'Sep 2024 - Jun 2026',
    location: 'Boston, MA',
    description: 'Completed a Master’s degree in Computer Science.',
    image: northeasternImage,
  },
  {
    company: 'Nokia',
    position: 'AI Engineer Intern',
    date: 'Sep 2025 - Dec 2025',
    location: 'Sunnyvale, CA',
    description:
      'Engineered backend AI agents with Python and LangChain, built scalable microservices, and optimized Postgres vector queries. Shipped React and Next.js interfaces for human-in-the-loop oversight across distributed systems.',
    image: nokiaImage,
  },
  {
    company: 'Accenture',
    position: 'Software Engineer',
    date: 'Jun 2021 - Jul 2024',
    location: 'Mumbai, India',
    description:
      'Developed full-stack solutions with React, AngularJS, .NET, Python, AWS, and Azure; optimized operations and improved the user experience.',
    image: accentureImage,
  },
  {
    company: 'IT-Networks Infosystems',
    position: 'Software Engineer Intern',
    date: 'Jul 2020 - Mar 2021',
    location: 'Nagpur, India',
    description:
      'Built full-stack web applications with PHP and MySQL, improving system scalability, security, and user engagement.',
    image: itnetworkzImage,
  },
  {
    company: 'Nagpur University',
    position: 'Bachelor of Engineering, Computer Science',
    date: 'Aug 2017 - Apr 2021',
    location: 'Nagpur, India',
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
            <div className={`cv__mark${event.logo ? ' cv__mark--logo' : ''}`}>
              {event.image ? (
                <img src={event.image} alt="" width={148} height={148} loading="lazy" />
              ) : (
                <span className="cv__mono" aria-hidden="true">{event.monogram ?? event.company.slice(0, 3)}</span>
              )}
            </div>
            <div className="cv__head">
              <h3 className="cv__org">{event.company}</h3>
              <span className="cv__date">{event.date}</span>
              {event.location && <span className="cv__loc">{event.location}</span>}
            </div>
            <div className="cv__body">
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

