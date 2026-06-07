// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-mark">TG</div>
              <span className="footer-logo-text">Tejas Gopale</span>
            </Link>
            <p className="footer-brand-desc">
              Full Stack Developer specializing in Java Spring Boot and React.js.
              Building enterprise-grade applications from Mumbai, India.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/Tejas-Gopale"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/tejas-gopale-java-developer2807/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.58 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/its_tejasgopale_0001"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a
                href="mailto:tejasgopale111@gmail.com"
                className="footer-social-link"
                title="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <div className="footer-links">
              {[
                { label: 'Home', path: '/' },
                { label: 'Projects', path: '/projects' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="footer-col-title">Tech Stack</div>
            <div className="footer-links">
              {['Java Spring Boot', 'React.js', 'React Native', 'PostgreSQL', 'Firebase', 'SAP APIs'].map(skill => (
                <span key={skill} className="footer-link" style={{ cursor: 'default' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Get In Touch</div>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <span>502 F Wing, Ambedkar Nagar,<br />Prabhadevi, Mumbai, India</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <a href="tel:+917720811386">+91 77208 11386</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <a href="mailto:tejasgopale111@gmail.com">tejasgopale111@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {currentYear} <span>Tejas Gopale</span>. All rights reserved.
          </div>
          <div className="footer-tagline">
            Built with <span className="footer-heart">♥</span> in Mumbai, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
