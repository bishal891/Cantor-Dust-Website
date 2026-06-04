import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteData';
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
      <div className="header-top-bar">
        <Link to="/" className="header-brand" onClick={closeMenu}>
          <img src={media.logo} alt="Cantor Dust" className="header-brand-logo" />
        </Link>
        <div className="header-menu-slot">
          <button
            type="button"
            className={`menu-pill ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-pill-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="menu-pill-label">Menu</span>
          </button>
        </div>
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
                <div className="nav-dropdown-row">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-dropdown-link${isActive ? ' active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                  <button
                    type="button"
                    className={`nav-dropdown-toggle ${servicesOpen ? 'is-open' : ''}`}
                    aria-expanded={servicesOpen}
                    aria-label={`${servicesOpen ? 'Collapse' : 'Expand'} ${link.label} submenu`}
                    onClick={() => setServicesOpen((open) => !open)}
                  >
                    <span className="nav-chevron" aria-hidden="true" />
                  </button>
                </div>
                <ul className={`dropdown ${servicesOpen ? 'show' : ''}`}>
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
        </ul>
      </nav>
    </header>
  );
}
