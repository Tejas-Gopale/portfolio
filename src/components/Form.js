import './FormStyles.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import React from 'react'
import Swal from 'sweetalert2';

export const Form = () => {

  const [submitted, setSubmitted] = useState(false); // State to track if the form has been submitted

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('tejasgopale111@gmail.com', 'template_4c965zo', formData, 'S5W6-1T9Wh02fc_wL')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Optionally reset the form or show a success message
        Swal.fire({
          icon: 'success',
          title: 'Thank you!',
          text: 'Thanks for contacting Tejas.We will contact you within 12 hours.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (err) => {
        console.error('FAILED...', err);
      });
  };


  return (
    <div className='form'>
      {submitted ? (
        <div className='thank-you-message'>
          <h2>Thank you, {formData.name}! We will contact you back within 24 hours.</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Subject</label>
          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            rows="6"
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Type your Message here...'
            required
          ></textarea>
          <button className='btn'>Submit</button>
        </form>
      )}
    </div>
  )
}
