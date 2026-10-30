import React from 'react';
import { Mail } from 'lucide-react';

const EMAIL = 'sarthakd.work2@gmail.com';

const Contact: React.FC = () => {
  return (
    <section className="section section--band" id="contact">
      <div className="container contact">
        <div data-reveal>
          <h2 className="head__title">Say hello</h2>
          <p className="head__lead">
            Open to New Grad SDE and SDE II roles, and glad to talk through any of the work above.
          </p>
          <a href={`mailto:${EMAIL}`} className="btn btn--primary contact__action">
            <Mail className="icon" aria-hidden="true" /> Email me
          </a>
        </div>

        <dl className="sheet" data-reveal>
          <div className="sheet__row">
            <dt className="sheet__label">Email</dt>
            <dd className="sheet__value sheet__value--plain"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
          </div>
          <div className="sheet__row">
            <dt className="sheet__label">LinkedIn</dt>
            <dd className="sheet__value sheet__value--plain">
              <a href="https://www.linkedin.com/in/sarthakdeshmukh1999" target="_blank" rel="noopener noreferrer">
                in/sarthakdeshmukh1999
              </a>
            </dd>
          </div>
          <div className="sheet__row">
            <dt className="sheet__label">GitHub</dt>
            <dd className="sheet__value sheet__value--plain">
              <a href="https://github.com/sarthak-wq" target="_blank" rel="noopener noreferrer">
                github.com/sarthak-wq
              </a>
            </dd>
          </div>
          <div className="sheet__row">
            <dt className="sheet__label">Based in</dt>
            <dd className="sheet__value">Boston, Massachusetts</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;
