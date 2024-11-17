import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">
          <span className="logo-left">FOOD HALL</span>
          <span className="logo-icon">🌿</span>
          <span className="logo-right">CAFE</span>
        </h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#catering">Catering & Events</a></li> {/* New Link */}
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
