// src/routes/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import { projectsData } from '../data/projectsData';
import './Home.css';

const Home = () => {
  // Show first 3 projects as featured
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />

      {/* Stats Bar */}
      <div className="home-stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '6+', label: 'Projects Shipped' },
              { num: '2+', label: 'Years of Experience' },
              { num: '3+', label: 'Satisfied Clients' },
              { num: '10+', label: 'Technologies' },
            ].map(stat => (
              <div key={stat.label} className="stat-item">
                <div className="stat-number">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="home-featured-projects">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <div className="section-tag">Featured Work</div>
              <h2 className="section-title-large">Recent Projects</h2>
              <p className="section-desc">
                Enterprise applications, SaaS platforms, and digital products
                built with precision and performance in mind.
              </p>
            </div>
            <Link to="/projects" className="btn-outline">
              View All Projects →
            </Link>
          </div>

          <div className="projects-preview-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection />

      {/* CTA Section */}
      <section className="home-cta-block">
        <div className="cta-glow-center" />
        <div className="container">
          <div className="home-cta-content">
            <div className="cta-eyebrow">Open for work & collaboration</div>
            <h2 className="cta-title">
              Have a Project<br />
              in <span>Mind?</span>
            </h2>
            <p className="cta-subtitle">
              I'm always excited to work on new challenges. Let's create something
              extraordinary together—from concept to production.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </Link>
              <Link to="/about" className="btn-outline">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
