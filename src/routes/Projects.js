// src/routes/Projects.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const CATEGORIES = ['All', 'Full Stack Web', 'Mobile + Backend', 'SaaS Platform', 'E-Commerce Website', 'Corporate Website'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* Page Hero */}
      <div className="projects-hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" style={{ opacity: 0.5 }} />
          <div className="hero-orb hero-orb-2" style={{ opacity: 0.4 }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div className="projects-hero-content">
            <div className="section-tag">Portfolio</div>
            <h1 className="projects-hero-title">All Projects</h1>
            <p className="projects-hero-desc">
              A complete showcase of enterprise applications, SaaS platforms, mobile apps,
              and digital products I've built for clients and companies.
            </p>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="projects-filter-bar">
        <div className="container">
          <div className="filter-scroll-wrap">
            <div className="filter-chips">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span className="chip-count">
                      {projectsData.filter(p => p.category === cat).length}
                    </span>
                  )}
                  {cat === 'All' && (
                    <span className="chip-count">{projectsData.length}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="projects-list-section">
        <div className="container">
          <div className="projects-count">
            <span className="count-number">{filtered.length}</span>
            <span className="count-label">project{filtered.length !== 1 ? 's' : ''} found</span>
          </div>

          <div className="projects-main-grid">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
