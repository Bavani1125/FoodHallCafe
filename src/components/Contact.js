import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Email: info@foodhallcafe.com</p>
      <p>Phone: +1 (201) 314-3270</p>
      <p>Address: 130 Monticello Avenue, Jersey City, NJ 07304</p>
      {/* <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form> */}
    </div>
  );
};

export default Contact;
