import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const EMAIL = 'sarthakd.work2@gmail.com';

const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Experience' },
  { id: 'project', label: 'Work' },
  { id: 'hobbies', label: 'Photography' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const links = (
    <div className="nav__links is-desktop">
      {menuItems.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleSmoothScroll(e, id)}
          className="nav__link"
        >
          {label}
        </a>
      ))}
      <a href={`mailto:${EMAIL}`} className="btn btn--primary nav__cta">
        Email me
      </a>
    </div>
  );

  return (
    <nav className="nav">
      <div className="nav__inner container">
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, 'home')}
          className="nav__brand"
          aria-label="Sarthak Deshmukh, back to top"
        >
          Sarthak Deshmukh
        </a>

        {links}

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="nav-panel"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="icon" aria-hidden="true" /> : <Menu className="icon" aria-hidden="true" />}
        </button>
      </div>

      <div className="nav__panel" id="nav-panel" hidden={!isMenuOpen}>
        <div className="nav__links">
          {menuItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="nav__link"
            >
              {label}
            </a>
          ))}
          <a href={`mailto:${EMAIL}`} className="btn btn--primary nav__cta">
            Email me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
