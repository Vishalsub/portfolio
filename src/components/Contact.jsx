import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending an email or saving to a database
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <p className="section__text__p1">Connect With Me</p>
      <h1 className="title">Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" value={formData.name} placeholder="Full Name" onChange={handleChange} required />
        <input type="email" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
        <textarea id="message" name="message" value={formData.message} placeholder="Message" onChange={handleChange} required />
        <button type="submit" className="btn btn-color-1">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
