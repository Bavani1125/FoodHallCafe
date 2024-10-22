import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>Address: 130 Monticello Avenue, Jersery City, NJ 07304</p>
      <p>Phone: (201) 314-3270</p>
      <p>Email: info@foodhallcafe.com</p>


      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />

        <label>Email:</label>
        <input type="email" placeholder="Your Email" />

        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
