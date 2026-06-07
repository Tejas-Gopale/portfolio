// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or ESC key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
            <div className="nav-logo-mark">TG</div>
            <span className="nav-logo-text">Tejas<span>.</span></span>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={path === '/'}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Status indicator */}
            <div className="nav-status">
              <div className="nav-status-dot" />
              Available
            </div>

            <NavLink to="/contact" className="nav-cta">
              Hire Me
            </NavLink>

            {/* Hamburger */}
            <button
              className={`hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            end={path === '/'}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className="btn-primary"
          style={{ marginTop: '1rem', justifyContent: 'center' }}
          onClick={() => setMobileOpen(false)}
        >
          Hire Me
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
