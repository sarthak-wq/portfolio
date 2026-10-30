import React from 'react';
import { Mail, FileText, Linkedin, Github } from 'lucide-react';
import heroImage from '../../assets/photo17.jpeg';

const EMAIL = 'sarthakd.work2@gmail.com';

const Hero: React.FC = () => {
  return (
    <header className="hero" id="home">
      <div className="hero__media">
        <img
          src={heroImage}
          alt="A lone figure on the sand at Bird Rock, 17 Mile Drive, with the Pacific and a wooded headland beyond"
          width={6000}
          height={4000}
          fetchPriority="high"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container">
        <div className="hero__content" data-reveal>
          <h1 className="hero__title">Sarthak Deshmukh</h1>
          <p className="hero__lead">
            Full-stack developer and system architect, open to New Grad SDE and SDE II roles.
          </p>
          <div className="hero__actions">
            <a href={`mailto:${EMAIL}`} className="btn btn--primary">
              <Mail className="icon" aria-hidden="true" /> Email me
            </a>
            <a href="/Latest_Resume2026.pdf" target="_blank" rel="noopener noreferrer" className="btn">
              <FileText className="icon" aria-hidden="true" /> Résumé
            </a>
          </div>
          <div className="hero__links">
            <a href="https://www.linkedin.com/in/sarthakdeshmukh1999" target="_blank" rel="noopener noreferrer">
              <Linkedin className="icon" aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://github.com/sarthak-wq" target="_blank" rel="noopener noreferrer">
              <Github className="icon" aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </div>

      <p className="hero__caption label">Bird Rock, 17 Mile Drive, California</p>
    </header>
  );
};

export default Hero;
