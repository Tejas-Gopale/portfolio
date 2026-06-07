// src/routes/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const EXPERIENCE = [
  {
    company: 'Bhilosa Industries Pvt. Ltd.',
    role: 'Software Developer (IT Department)',
    duration: '2023 – Present',
    current: true,
    desc: 'Developing and maintaining enterprise-level internal tools and portals. Built the VGI Approval System (React Native + Java + Firebase) and the Customer Vendor Portal (Vite.js + Spring Boot + PostgreSQL + SAP APIs). Integrated SAP HANA APIs, JWT security, and real-time Firebase notifications across multiple production systems.',
    tags: ['Java Spring Boot', 'React Native', 'Vite.js', 'PostgreSQL', 'SAP APIs', 'Firebase', 'JWT'],
  },
  {
    company: 'KaryaSoft Technology',
    role: 'Full Stack Developer (Freelance)',
    duration: '2023 – Present',
    current: true,
    desc: 'Leading development of the Schools SaaS ERP platform—a multi-tenant school management system with Android apps for teachers, parents, and students. Also built and maintain the official KaryaSoft Technology corporate website with SEO and animation-rich UI.',
    tags: ['React.js', 'Spring Boot', 'Android', 'MySQL', 'Razorpay', 'SaaS Architecture'],
  },
  {
    company: 'Stermin Muse Jewellery',
    role: 'Web Developer (Freelance)',
    duration: '2023',
    current: false,
    desc: 'Designed and developed the official luxury jewellery e-commerce website on the Wix platform. Focused on brand-aligned design, SEO, product catalog management, and a seamless mobile shopping experience.',
    tags: ['Wix Studio', 'E-Commerce', 'UI/UX Design', 'SEO'],
  },
  {
    company: 'Helcolin India Pvt. Ltd.',
    role: 'Web Developer (Freelance)',
    duration: '2024',
    current: false,
    desc: 'Built the official corporate website for Helcolin India with a dynamic content management panel, inquiry management system, and professional brand-aligned design.',
    tags: ['React.js', 'Spring Boot', 'MySQL', 'Corporate Design'],
  },
  {
    company: 'Profound IT Solutions',
    role: 'Internship – Java Developer',
    duration: '2022',
    current: false,
    desc: 'Completed internship focusing on Java web development. Built a full-featured Online Shopping Store using JSP, Servlets, HTML, CSS with complete CRUD operations and billing system.',
    tags: ['Java', 'JSP', 'Servlets', 'HTML', 'CSS', 'MySQL'],
  },
];

const EDUCATION = [
  {
    year: '2020 – 2023',
    degree: 'Bachelor of Science in Computer Science',
    institute: 'University of Mumbai, Maharashtra',
  },
  {
    year: '2019 – 2020',
    degree: 'Higher Secondary Certificate (HSC)',
    institute: 'Maharashtra State Board',
  },
];

const About = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      {/* Hero */}
      <div className="about-hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" style={{ opacity: 0.5 }} />
          <div className="hero-orb hero-orb-2" style={{ opacity: 0.4 }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div className="about-hero-content">
            <div className="section-tag">About Me</div>
            <h1 className="about-hero-title">The Developer<br />Behind the Code</h1>
            <p className="about-hero-desc">
              A passionate full-stack developer from Mumbai with a love for building
              scalable enterprise systems and polished digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Main About */}
      <section className="about-main">
        <div className="container">
          <div className="about-main-grid">
            {/* Visual */}
            <div className="about-left-sticky">
              <div className="about-visual-stack">
                <div className="about-main-card">
                  <div className="about-avatar-emoji">👨‍💻</div>
                  <div className="about-name-badge">
                    <span className="about-badge-name">Tejas Gopale</span>
                    <span className="about-badge-role">Full Stack Developer</span>
                  </div>
                  <div className="about-status-row">
                    <div className="about-status-dot" />
                    Available for Work
                  </div>
                </div>

                <div className="about-float-card about-float-card-1">
                  <div className="float-card-label">Experience</div>
                  <div className="float-card-value">2+ Years</div>
                </div>

                <div className="about-float-card about-float-card-2">
                  <div className="float-card-label">Projects Shipped</div>
                  <div className="float-card-value">6+ Apps</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="about-right">
              <div className="about-section-tag">My Story</div>
              <h2 className="about-section-heading">
                Who <span>Am I?</span>
              </h2>

              <p className="about-body-text">
                I'm <strong>Tejas Gopale</strong>, a Full Stack Developer based in <strong>Mumbai, India</strong>.
                I specialize in <strong>Java Spring Boot</strong> backend systems and modern <strong>React.js / React Native</strong> frontends.
                I'm currently working full-time at <strong>Bhilosa Industries</strong> while also taking on freelance projects through <strong>KaryaSoft Technology</strong>.
              </p>

              <p className="about-body-text">
                My journey in software development started with a curiosity about how complex enterprise systems work.
                Over the past 2+ years, I've worked on everything from <strong>SAP-integrated portals</strong> and
                <strong> JWT-secured APIs</strong> to <strong>multi-tenant SaaS ERP platforms</strong> and
                <strong> mobile applications</strong> used by schools, vendors, and businesses across India.
              </p>

              <p className="about-body-text">
                I believe great software comes from clean architecture, honest communication, and a genuine
                passion for solving real problems. When I'm not coding, I'm learning about new
                technologies, contributing to open-source, or helping fellow developers in the community.
              </p>

              {/* Quick facts */}
              <div className="about-quick-facts">
                {[
                  { label: 'Location', value: 'Mumbai, Maharashtra' },
                  { label: 'Email', value: 'tejasgopale111@gmail.com' },
                  { label: 'Phone', value: '+91 77208 11386' },
                  { label: 'Languages', value: 'Hindi, English, Marathi' },
                  { label: 'Primary Stack', value: 'Java + React.js' },
                  { label: 'Open To', value: 'Freelance & Full-time' },
                ].map(fact => (
                  <div key={fact.label} className="fact-item">
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                ))}
              </div>

              <div className="about-cta-row">
                <Link to="/contact" className="btn-primary">
                  Get In Touch →
                </Link>
                <Link to="/projects" className="btn-outline">
                  View Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="experience-section">
            <div className="exp-section-header">
              <div className="section-tag">Experience</div>
              <h2 className="section-title-large" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}>Work History</h2>
            </div>

            <div className="exp-timeline">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-dot-col">
                    <div className={`exp-dot ${exp.current ? 'current' : ''}`} />
                  </div>
                  <div className="exp-card">
                    <div className="exp-card-header">
                      <div>
                        <div className="exp-company">{exp.company}</div>
                        <div className="exp-role">{exp.role}</div>
                      </div>
                      <span className="exp-duration">{exp.duration}</span>
                    </div>
                    <p className="exp-desc">{exp.desc}</p>
                    <div className="exp-tags">
                      {exp.tags.map(tag => (
                        <span key={tag} className="exp-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="experience-section">
            <div className="exp-section-header">
              <div className="section-tag">Education</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}>Academic Background</h2>
            </div>
            <div className="education-grid">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="edu-card">
                  <div className="edu-year">{edu.year}</div>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-institute">{edu.institute}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
