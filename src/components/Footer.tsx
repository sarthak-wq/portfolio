import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const EMAIL = 'sarthakd.work2@gmail.com';

const Footer: React.FC = () => {
  return (
    <footer className="colophon">
      <div className="container">
        <div className="colophon__top">
          <div>
            <div className="colophon__mark">Sarthak Deshmukh</div>
            <p className="colophon__line">
              Full-stack developer in Boston, building across the web and the cloud.
            </p>
          </div>
          <div className="colophon__links">
            <a href="https://www.linkedin.com/in/sarthakdeshmukh1999" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="icon" aria-hidden="true" />
            </a>
            <a href="https://github.com/sarthak-wq" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="icon" aria-hidden="true" />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <Mail className="icon" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="colophon__legal">© {new Date().getFullYear()} Sarthak Deshmukh</p>
      </div>
    </footer>
  );
};

export default Footer;
