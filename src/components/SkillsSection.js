// src/components/SkillsSection.js
import React from 'react';
import { skillsData } from '../data/projectsData';
import './SkillsSection.css';

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    icon: '💻',
    gradient: 'linear-gradient(135deg, #00E5FF, #0099CC)',
    skills: skillsData.languages,
  },
  {
    name: 'Frontend',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #BF5AF2, #7B2FBE)',
    skills: skillsData.frontend,
  },
  {
    name: 'Backend',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #FF6B35, #E8450A)',
    skills: skillsData.backend,
  },
  {
    name: 'Databases',
    icon: '🗄️',
    gradient: 'linear-gradient(135deg, #00D4AA, #00996B)',
    skills: skillsData.database,
  },
  {
    name: 'Tools & DevOps',
    icon: '🛠️',
    gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
    skills: skillsData.tools,
  },
  {
    name: 'Cloud & Integrations',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #FF4785, #D4004A)',
    skills: [...skillsData.cloud, ...skillsData.integrations],
  },
];

const ALL_SKILLS = [
  ...skillsData.languages,
  ...skillsData.frontend,
  ...skillsData.backend,
  ...skillsData.database,
  ...skillsData.tools,
  ...skillsData.cloud,
  ...skillsData.integrations,
];

const SkillsSection = () => {
  // Duplicate for seamless loop
  const marqueeItems = [...ALL_SKILLS, ...ALL_SKILLS];

  return (
    <section className="skills-section">
      <div className="skills-section-bg" />
      <div className="container">
        <div className="skills-header">
          <div className="section-tag">Tech Stack</div>
          <h2 className="skills-title">
            What I Work With
          </h2>
          <p className="skills-subtitle">
            A curated toolkit of technologies I use to build enterprise-grade, scalable, and performant applications.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map(cat => (
            <div
              key={cat.name}
              className="skill-category-card"
              style={{ '--cat-gradient': cat.gradient }}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <span className="skill-cat-name">{cat.name}</span>
              </div>
              <div className="skill-tags-wrap">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="skills-marquee" style={{ marginTop: '3rem' }}>
        <div className="marquee-track">
          {marqueeItems.map((skill, i) => (
            <div key={i} className="marquee-item">
              <div className="marquee-item-dot" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
