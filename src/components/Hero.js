// src/components/Hero.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const ROLES = [
  'Full Stack Developer',
  'Java Spring Boot Expert',
  'React.js Developer',
  'React Native Developer',
  'Enterprise Solutions Dev',
];

const FLOATING_DOTS = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${4 + Math.random() * 6}s`,
  delay: `${Math.random() * 4}s`,
  opacity: (0.1 + Math.random() * 0.4).toFixed(2),
}));

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(r => (r + 1) % ROLES.length);
    }

    setDisplayText(ROLES[roleIndex].substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const techBadges = ['Java', 'Spring Boot', 'React.js', 'React Native', 'PostgreSQL', 'Firebase'];

  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-dots">
          {FLOATING_DOTS.map(dot => (
            <div
              key={dot.id}
              className="hero-dot"
              style={{
                left: dot.left,
                top: dot.top,
                '--duration': dot.duration,
                '--delay': dot.delay,
                '--opacity': dot.opacity,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-left">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-dot" />
            Available for Freelance &amp; Collaboration
          </div>

          {/* Name */}
          <h1 className="hero-name">
            Hi, I'm
            <span className="hero-name-accent"> Tejas Gopale</span>
          </h1>

          {/* Dynamic Role */}
          <div className="hero-role-wrapper">
            <span className="hero-role-static">I build </span>
            <span className="hero-role-dynamic">
              {displayText}
              <span className="type-cursor" />
            </span>
          </div>

          {/* Description */}
          <p className="hero-desc">
            Full-stack developer specializing in <strong>Java Spring Boot</strong> and <strong>React.js</strong> ecosystems.
            I craft enterprise-grade applications, mobile apps, and scalable SaaS platforms—from SAP-integrated
            portals to complete school management systems.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn-outline">
              Get In Touch
            </Link>
          </div>

          {/* Tech badges */}
          <div className="hero-stack">
            <span className="hero-stack-label">Built with</span>
            {techBadges.map(badge => (
              <span key={badge} className="hero-tech-badge">{badge}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {[
              { num: '6+', label: 'Projects' },
              { num: '2+', label: 'Years Exp.' },
              { num: '3+', label: 'Clients' },
            ].map(stat => (
              <div key={stat.label} className="hero-stat-item">
                <div className="hero-stat-number">{stat.num}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Code window */}
        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-code-window">
              <div className="code-window-header">
                <div className="code-dot code-dot-red" />
                <div className="code-dot code-dot-yellow" />
                <div className="code-dot code-dot-green" />
                <span className="code-filename">Developer.java</span>
              </div>

              <pre style={{ margin: 0 }}>
                <code>
                  <p className="code-line">
                    <span className="code-keyword">@RestController</span>
                  </p>
                  <p className="code-line">
                    <span className="code-keyword">public class </span>
                    <span className="code-function">Developer</span> {'{'}
                  </p>
                  <p className="code-line"> </p>
                  <p className="code-line">
                    {'  '}<span className="code-keyword">String</span>{' '}
                    <span className="code-function">name</span>{' '}
                    <span className="code-operator">=</span>{' '}
                    <span className="code-string">"Tejas Gopale"</span>;
                  </p>
                  <p className="code-line">
                    {'  '}<span className="code-keyword">int</span>{' '}
                    <span className="code-function">experience</span>{' '}
                    <span className="code-operator">=</span>{' '}
                    <span className="code-number">2</span>;
                  </p>
                  <p className="code-line"> </p>
                  <p className="code-line">
                    {'  '}<span className="code-comment">// Core skills</span>
                  </p>
                  <p className="code-line">
                    {'  '}<span className="code-function">String[]</span>{' skills'}{' '}
                    <span className="code-operator">=</span> {'{'}
                  </p>
                  <p className="code-line">
                    {'    '}<span className="code-string">"Spring Boot"</span>,
                  </p>
                  <p className="code-line">
                    {'    '}<span className="code-string">"React.js"</span>,
                  </p>
                  <p className="code-line">
                    {'    '}<span className="code-string">"PostgreSQL"</span>
                  </p>
                  <p className="code-line">{'  '}{'}'}</p>
                  <p className="code-line">{'}'}</p>
                </code>
              </pre>
            </div>

            {/* Floating badges */}
            <div className="floating-badge floating-badge-1">
              <span className="badge-icon">✅</span>
              Production Ready
            </div>
            <div className="floating-badge floating-badge-2">
              <span className="badge-icon">🚀</span>
              6+ Shipped Projects
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
