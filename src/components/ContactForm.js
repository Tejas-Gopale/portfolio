// src/components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_tejas',          // Replace with your EmailJS service ID
        'template_4c965zo',       // Your template ID
        formData,
        'S5W6-1T9Wh02fc_wL'      // Your public key
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Info side */}
          <div className="contact-info-side">
            <div className="section-tag">Contact</div>
            <h2 className="contact-heading">
              Let's Build<br />
              Something <span>Great</span>
            </h2>
            <p className="contact-subtext">
              I'm open to freelance projects, full-time roles, and exciting collaborations.
              Whether it's a quick question or a full project brief—let's talk.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon-wrap">📍</div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">Prabhadevi, Mumbai, India</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-wrap">📞</div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">
                    <a href="tel:+917720811386">+91 77208 11386</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-wrap">✉️</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    <a href="mailto:tejasgopale111@gmail.com">tejasgopale111@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-wrap">⏱️</div>
                <div>
                  <div className="contact-info-label">Response Time</div>
                  <div className="contact-info-value">Within 12–24 hours</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Tejas-Gopale"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/tejas-gopale-java-developer2807/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-card">
            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-message">
                  Thanks for reaching out! I'll get back to you within 12–24 hours.
                  Looking forward to our conversation.
                </p>
                <button
                  className="btn-outline"
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '0.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration / Job Opportunity"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, requirements, or just say hi..."
                    className="form-textarea"
                    rows={6}
                    required
                  />
                </div>

                {status === 'error' && (
                  <div style={{
                    padding: '10px 16px',
                    background: 'rgba(255, 107, 53, 0.1)',
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    color: '#FF6B35',
                  }}>
                    Failed to send message. Please try emailing directly at tejasgopale111@gmail.com
                  </div>
                )}

                <button
                  type="submit"
                  className={`form-submit-btn ${status === 'sending' ? 'sending' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="spinner" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                <p style={{
                  textAlign: 'center',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  Your information is kept private and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
