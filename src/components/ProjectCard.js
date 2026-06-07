// src/components/ProjectCard.js
import React, { useState, useEffect } from 'react';
import './ProjectCard.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  return (
    <div className="project-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="project-modal" style={{ '--modal-color': project.color }}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              className="card-icon-wrapper"
              style={{
                background: `rgba(${hexToRgb(project.color)}, 0.1)`,
                border: `1px solid rgba(${hexToRgb(project.color)}, 0.25)`,
              }}
            >
              {project.icon}
            </div>
            <div>
              <div className="card-company">{project.company}</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
              }}>
                {project.title}
              </h2>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Tags */}
          <div className="card-tags" style={{ padding: 0, marginBottom: '1.5rem' }}>
            {project.tags.map(tag => (
              <span key={tag} className="card-tag" style={{ borderColor: `rgba(${hexToRgb(project.color)}, 0.2)` }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="modal-section-title">About This Project</div>
          <p className="modal-desc">{project.longDesc}</p>

          {/* Features */}
          <div className="modal-section-title">Key Features</div>
          <div className="modal-features">
            {project.features.map((feature, i) => (
              <div key={i} className="modal-feature">
                <span className="feature-check">▲</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="modal-section-title">Technology Stack</div>
          <div className="modal-stack-grid">
            {Object.entries(project.stack).map(([category, items]) => (
              <div key={category} className="stack-section">
                <div className="stack-section-label">{category}</div>
                <div className="stack-items">
                  {items.map((item, i) => (
                    <span key={i} className="stack-item">
                      {item}{i < items.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            {project.confidential ? (
              <>
                <span style={{ fontSize: '1rem' }}>🔒</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Source code and live demo are confidential per client agreement.
                </span>
              </>
            ) : (
              <>
                <span style={{ fontSize: '1rem' }}>✅</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {project.liveUrl ? 'Project is live.' : 'Project completed successfully.'}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [showModal, setShowModal] = useState(false);

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const rgb = hexToRgb(project.color);

  return (
    <>
      <div
        className="project-card"
        onClick={() => setShowModal(true)}
        style={{
          '--card-color': project.color,
          '--card-color-alpha': `rgba(${rgb}, 0.06)`,
          '--card-border': `rgba(${rgb}, 0.25)`,
          '--card-glow': `0 0 40px rgba(${rgb}, 0.08)`,
          '--card-icon-bg': `rgba(${rgb}, 0.08)`,
          '--card-gradient': `linear-gradient(135deg, ${project.color}, ${project.accent})`,
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Accent bar */}
        <div className="card-accent-bar" />

        {/* Header */}
        <div className="card-header">
          <div className="card-icon-wrapper">{project.icon}</div>
          <div className="card-meta">
            <span className="card-year">{project.year}</span>
            <span className={`card-status ${project.status.toLowerCase()}`}>
              <span className="status-dot" />
              {project.status}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="card-body">
          <div className="card-company">{project.company}</div>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-desc">{project.shortDesc}</p>
        </div>

        {/* Tags */}
        <div className="card-tags">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="card-tag">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Footer */}
        <div className="card-footer">
          <span className="card-category">{project.category}</span>
          <div className="card-action">
            {project.confidential ? (
              <span className="card-confidential">🔒 View Details</span>
            ) : (
              <>View Details <span>→</span></>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <ProjectModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProjectCard;
