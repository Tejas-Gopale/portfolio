// src/routes/Contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      {/* Page Hero */}
      <div className="contact-hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" style={{ opacity: 0.5 }} />
          <div className="hero-orb hero-orb-2" style={{ opacity: 0.4 }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div className="contact-hero-content">
            <div className="section-tag">Get In Touch</div>
            <h1 className="contact-hero-title">Let's Work<br />Together</h1>
            <p className="contact-hero-desc">
              Whether it's a new project, a collaboration, or just a conversation—
              I'd love to hear from you. My inbox is always open.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
