import { useEffect, useId, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { getHireTalentGmailUrl, navLinks, siteConfig } from '../config/siteData';
import ServicesDropdown from './ServicesDropdown';
import logo from '../assets/logo/hire-nexis-logo.png';
import '../styles/header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const mobileNavId = useId();
  const hireTalentHref = getHireTalentGmailUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen);
    return () => document.body.classList.remove('nav-open');
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/*
        Mobile nav must NOT live inside <header>.
        backdrop-filter / filter on .site-header creates a containing block,
        which traps position:fixed descendants inside the short header box.
      */}
      <header
        className={`site-header${scrolled ? ' is-scrolled' : ''}${mobileOpen ? ' is-menu-open' : ''}`}
      >
        <div className="site-header__inner">
          <Link to="/" className="site-logo" aria-label={`${siteConfig.name} home`}>
            <img src={logo} alt={siteConfig.name} width={260} height={104} />
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            <ul className="desktop-nav__list">
              {navLinks.map((item) =>
                item.children ? (
                  <ServicesDropdown key={item.path} item={item} />
                ) : (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `desktop-nav__link${isActive ? ' is-active' : ''}`
                      }
                      end={item.path === '/'}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
            <a
              href={hireTalentHref}
              className="btn btn--primary desktop-nav__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register as a Candidate
            </a>
          </nav>

          <button
            type="button"
            className={`menu-toggle${mobileOpen ? ' is-active' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            onClick={() => setMobileOpen((prev) => !prev)}>
            <span className="menu-toggle__box" aria-hidden="true">
              <span className="menu-toggle__bar" />
              <span className="menu-toggle__bar" />
              <span className="menu-toggle__bar" />
            </span>
          </button>
        </div>
      </header>

      <div
        id={mobileNavId}
        className={`mobile-nav${mobileOpen ? ' is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="mobile-nav__backdrop"
          aria-label="Close menu"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={closeMobile}
        />

        <nav className="mobile-nav__panel" aria-label="Mobile primary">
          <div className="mobile-nav__panel-head">
            <p className="mobile-nav__eyebrow">Menu</p>
            <p className="mobile-nav__intro">Explore Hire Nexis</p>
          </div>

          <ul className="mobile-nav__list">
            {navLinks.map((item) =>
              item.children ? (
                <li key={item.path} className="mobile-nav__item">
                  <button
                    type="button"
                    className={`mobile-nav__toggle${mobileServicesOpen ? ' is-open' : ''}`}
                    aria-expanded={mobileServicesOpen}
                    tabIndex={mobileOpen ? 0 : -1}
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  <div
                    className={`mobile-nav__submenu-wrap${mobileServicesOpen ? ' is-open' : ''}`}
                  >
                    <ul className="mobile-nav__submenu">
                      <li>
                        <NavLink
                          to={item.path}
                          tabIndex={mobileOpen && mobileServicesOpen ? 0 : -1}
                          className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                          onClick={closeMobile}
                        >
                          All Services
                        </NavLink>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            tabIndex={mobileOpen && mobileServicesOpen ? 0 : -1}
                            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                            onClick={closeMobile}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.path} className="mobile-nav__item">
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    tabIndex={mobileOpen ? 0 : -1}
                    className={({ isActive }) =>
                      `mobile-nav__link${isActive ? ' is-active' : ''}`
                    }
                    onClick={closeMobile}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <div className="mobile-nav__footer">
            <a
              href={hireTalentHref}
              className="btn btn--primary mobile-nav__cta"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileOpen ? 0 : -1}
              onClick={closeMobile}
            >
              Register as a Candidate
            </a>
            <Link
              to="/services"
              className="btn btn--secondary mobile-nav__cta-secondary"
              tabIndex={mobileOpen ? 0 : -1}
              onClick={closeMobile}
            >
              Explore Services
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
