import React from 'react';
import '../App.css'; // Corrected path

function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
