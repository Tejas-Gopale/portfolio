// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';

import Home from './routes/Home';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import CustomCursor from './components/CustomCursor';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

// 404 page
const NotFound = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    textAlign: 'center',
    padding: '2rem',
  }}>
    <div style={{ fontSize: '5rem' }}>🚀</div>
    <h1 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: 800,
      color: 'var(--accent-cyan)',
      letterSpacing: '-0.03em',
    }}>404</h1>
    <p style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.9rem',
      color: 'var(--text-secondary)',
      marginBottom: '1.5rem',
    }}>
      This page doesn't exist in this universe.
    </p>
    <a href="/" className="btn-primary">
      Return Home →
    </a>
  </div>
);

function App() {
  return (
    <>
      {/* Noise overlay for depth */}
      <div className="noise-overlay" />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/about"     element={<About />} />
          <Route path="/contact"   element={<Contact />} />

          {/* Legacy route redirects for backward compatibility */}
          <Route path="/Project"   element={<Projects />} />
          <Route path="/About"     element={<About />} />

          {/* 404 */}
          <Route path="*"          element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
