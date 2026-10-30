import React from 'react';
import portrait from '../../assets/mypicwithryder.jpeg';

const facts = [
  { label: 'Based in', value: 'Boston, Massachusetts' },
  { label: 'Studying', value: 'MS Information Systems, Northeastern' },
  { label: 'Experience', value: 'Four years in industry' },
  { label: 'Focus', value: 'Full-stack and backend AI' },
];

const skillGroups = [
  { label: 'Languages', items: ['JavaScript', 'Python', 'Java'] },
  { label: 'Frontend & mobile', items: ['React.js', 'React Native'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', '.NET Core', 'ASP.NET Core', 'RESTful APIs'] },
  { label: 'Data', items: ['MongoDB', 'PostgreSQL', 'SQL Server', 'MySQL', 'Redis'] },
  { label: 'Cloud & infra', items: ['AWS', 'Azure DevOps', 'Docker', 'Kubernetes', 'Linux', 'Git', 'CI/CD'] },
  { label: 'AI & systems', items: ['LangChain', 'MCP Servers', 'System Design', 'Distributed Systems'] },
  { label: 'Ways of working', items: ['Agile/Scrum'] },
];

const About: React.FC = () => {
  return (
    <section className="section container" id="about">
      <div className="head" data-reveal>
        <h2 className="head__title">The short version</h2>
      </div>

      <div className="about">
        <div className="about__col" data-reveal>
          <div className="about__bio">
            <p>
              I&rsquo;m a full-stack developer finishing a Master&rsquo;s in Information Systems at
              Northeastern. Three years at Accenture, a recent stint engineering backend AI agents at
              Nokia, and work that runs from a Postgres query to the interface on top of it.
            </p>
            <p>
              I&rsquo;m looking for a New Grad SDE or SDE II role. Off the clock I&rsquo;m out with a
              camera on the coast. Most of the photographs on this page are mine.
            </p>
          </div>

          <dl className="sheet">
            {facts.map((f) => (
              <div className="sheet__row" key={f.label}>
                <dt className="sheet__label">{f.label}</dt>
                <dd className="sheet__value">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="about__photo" data-reveal>
          <img src={portrait} alt="Sarthak Deshmukh, outdoors with a golden retriever" loading="lazy" />
        </figure>
      </div>

      <dl className="skills" data-reveal>
        {skillGroups.map((g) => (
          <div className="skills__group" key={g.label}>
            <dt className="skills__label">{g.label}</dt>
            <dd>
              <ul className="skills__list">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default About;
