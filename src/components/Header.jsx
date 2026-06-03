import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, contact } from '../data/siteData';
import { media } from '../data/wixMedia';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={media.logo} alt="Cantor Dust" className="logo" />
        </Link>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <button
        type="button"
        className={`nav-backdrop ${menuOpen ? 'is-visible' : ''}`}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <nav
        id="site-nav"
        className={`main-nav ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="nav-item has-dropdown">
                <button
                  type="button"
                  className={`nav-dropdown-trigger ${servicesOpen ? 'is-open' : ''}`}
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  {link.label}
                  <span className="nav-chevron" aria-hidden="true" />
                </button>
                <ul className={`dropdown ${servicesOpen ? 'show' : ''}`}>
                  <li>
                    <NavLink to={link.path} onClick={closeMenu}>
                      All Services
                    </NavLink>
                  </li>
                  {link.children.map((child) => (
                    <li key={child.path}>
                      <NavLink to={child.path} onClick={closeMenu}>
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
          <li className="nav-item">
            <a href={`mailto:${contact.email}`} className="nav-contact-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <a href={`mailto:${contact.email}`} className="nav-panel-contact" onClick={closeMenu}>
          {contact.email}
        </a>
      </nav>
    </header>
  );
}
